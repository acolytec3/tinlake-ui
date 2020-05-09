import React, { useState, useRef } from "react";
import styled, { ThemeProps as StyledThemeProps, withTheme } from "styled-components";
import { MarginType, deepMerge} from "grommet/utils";
import { defaultProps, extendDefaultTheme } from "grommet/default-props";
import { Button, Box, Form, FormField, TextInput, Image, Text, Select, Drop, Anchor } from "grommet";
import { copyToClipboard } from "@centrifuge/axis-utils";
import bigNumber from "bignumber.js";
import { AxisTheme } from "@centrifuge/axis-theme";

interface ThemeProps {
  erc20Widget: {
    margin: MarginType
  }
}

interface Props extends StyledThemeProps<ThemeProps> {
  value?: bigNumber | string,
  tokenData: TokenMetadata,
  balance?: bigNumber,
  limit?: bigNumber,
  search?: boolean,
  precision?: number,
  fieldLabel?: string,
  account?: string
}

export interface TokenProps {
  symbol: string,
  logo: string,
  address: string,
  decimals: Number
}

export interface TokenMetadata {
  [address:string] : {
    name: string,
    logo: string,
    symbol: string,
    decimals: number,
    erc20?: boolean
  }
}

const defaultThemeProps: ThemeProps = {
  erc20Widget: {
    margin: "small"
  }
};

const overflowStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '200px',
};

const specialTheme = ({
  select: {
    options: {
      text : {
        weight:'normal',
      },
      container : {
        align:"start"
      }
    },
    icons: {
      color: "black",
      margin: "xsmall",
    },
  },
  formField: {
    border:  {
      position: "outer",
      color: "none"
      }, 
    margin: {
      bottom: "none"
    }
  },
  anchor :{
    color: 'black',
    textDecoration: 'underline',
    weight: 'normal',
    size: 'small'
    }
});

const Circleinfo = styled.svg`
  fill: black;
  & :hover {
    path {
      fill: black;
    }
    cursor: pointer;
  }
`;

const copyIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="7" width="8" height="8" rx="2" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3.84615 10H3.23077C2.55103 10 2 9.44897 2 8.76923V3.23077C2 2.55103 2.55103 2 3.23077 2H8.76923C9.44897 2 10 2.55103 10 3.23077V3.84615" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export const Erc20Widget: React.FunctionComponent<Props> = (
  {
    value,
    tokenData,
    search,
    balance,
    limit,
    theme,
    precision,
    fieldLabel,
    account
  }
) => {

  var tokens: TokenProps[] = [];
  for (var k in tokenData) { 
    tokens.push({'address':k, 'logo':tokenData[k]['logo'], 'decimals':tokenData[k]['decimals'],'symbol':tokenData[k]['symbol']})}
  const [amount, setAmount] = useState(value);
  const [displayAmount, setDisplayAmount] = useState('');
  const [selectedToken, setToken] = useState((search) ? undefined : tokens[0]);
  const [options, setOptions] = useState(tokens);
  const [showDrop, setDrop] = useState(false);
  const dropRef = useRef();
  
  const renderToken = (token) => {
    if (token) {
      return <Box direction="row" align="center" gap="small" pad="xsmall">
        <Box direction="row" align="center">
          <Image fit="contain" src={token.logo} />
        </Box>
        <Box direction="row" align="start">
          <Text>{token.symbol}</Text></Box>
      </Box>
    }
    else return undefined
  }

  const setMax = (value) => {
    return (
      <Button plain onClick={() => {
        setAmount(new bigNumber(value));
        setDisplayAmount((new bigNumber(value)).toFormat())}}><Text size="small" weight="bold">Set Max</Text></Button>
    );
  }

  const validateInput = () => {
    // Check for invalid characters
    if (!(/^[0-9,.]*$/.test(displayAmount)))
    {
      return "Invalid Amount"
    }

    // Check for amount with too many decimals of precisions for specified token
    try {
      if (amount?.toString().replace(/\.?0+$/, "").split('.')[1].length > selectedToken?.decimals) {
        return "Invalid Amount"
      }
    }
    catch {}

    // Check if amount is greater than balance
    if (amount && balance && (new bigNumber(amount) > balance)) {
      return "Invalid Amount"
    }

    // Check if amount is greater than limit
    if (amount && limit && (new bigNumber(amount) > limit)) {
      return "Invalid Amount"
    }

    if (amount.isNaN()) {
      return "Invalid Amount"
    }
  }

  const copyAndHighlight = (id) => {
    copyToClipboard((amount) ? amount.toString() : "");
    var ref = document.getElementById("tokenValue");

  }

  const updateSearchList = (text) => {
    // The line below escapes regular expression special characters:
    // [ \ ^ $ . | ? * + ( )
    const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
    const exp = new RegExp(escapedText, "i");
    setOptions(options.filter(o => exp.test(o.symbol)));
  }

  const renderAddress = () => {
    return (
      <Box direction="row">
        <Text style={overflowStyle}>Account: {account}</Text>
        <Box onClick={() => copyToClipboard(account)}>{copyIcon()}</Box>
      </Box>
    )
  }

  const renderDisplayAmount = (newAmount) => {
    if (!(/^[0-9,.]*$/.test(newAmount))){
      setDisplayAmount(newAmount);
    }
    else if ((newAmount[newAmount.length-1] == '.') || (newAmount[newAmount.length-1] == '0')){
      setDisplayAmount(newAmount);
    }
    else {
      var newValue = newAmount.replace(/,/g,'');
      setAmount(new bigNumber(newValue));
      setDisplayAmount((new bigNumber(newValue)).toFormat());
    }
  }  
  

  return (
    <AxisTheme theme={specialTheme}>
      <Box direction="column" align="start" style={{ width: tokens.length > 1 ? "336px" : "284px"}}>
        { /* Optional Field Label and Information Icon */}
        <Box direction="row-responsive" justify="between" gap="xsmall" ref={dropRef} fill="horizontal">
          <Text style={{fontSize:"small"}}>{fieldLabel}</Text>
            <Circleinfo onClick={() => (selectedToken ? setDrop(true) : undefined)}
            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00008 15.3333C3.93341 15.3333 0.666748 12.0666 0.666748 7.99996C0.666748 3.93329 3.93341 0.666626 8.00008 0.666626C12.0667 0.666626 15.3334 3.93329 15.3334 7.99996C15.3334 12.0666 12.0667 15.3333 8.00008 15.3333ZM8.00008 1.99996C4.66675 1.99996 2.00008 4.66663 2.00008 7.99996C2.00008 11.3333 4.66675 14 8.00008 14C11.3334 14 14.0001 11.3333 14.0001 7.99996C14.0001 4.66663 11.3334 1.99996 8.00008 1.99996Z" fill="#EEEEEE"/>
            <path d="M7.99992 11.3334C7.59992 11.3334 7.33325 11.0667 7.33325 10.6667V8.00004C7.33325 7.60004 7.59992 7.33337 7.99992 7.33337C8.39992 7.33337 8.66659 7.60004 8.66659 8.00004V10.6667C8.66659 11.0667 8.39992 11.3334 7.99992 11.3334Z" fill="#EEEEEE"/>
            <path d="M7.99992 5.99996C7.79992 5.99996 7.66659 5.93329 7.53325 5.79996C7.39992 5.66663 7.33325 5.53329 7.33325 5.33329C7.33325 5.13329 7.39992 4.99996 7.53325 4.86663C7.79992 4.59996 8.19992 4.59996 8.46659 4.86663C8.59992 4.99996 8.66659 5.13329 8.66659 5.33329C8.66659 5.53329 8.59992 5.66663 8.46659 5.79996C8.33325 5.93329 8.19992 5.99996 7.99992 5.99996Z" fill="#EEEEEE"/>
            </Circleinfo>
          {showDrop && <Drop
            stretch={false}
            pad="small"
            onClickOutside={() => setDrop(false)}
            target={dropRef.current}
            align={{ right: "right" }}
          ><Box direction="column">
              {account && <Text>ERC20 Token Balance</Text>}
              {account && renderAddress()}
              <Text>Token: {selectedToken?.symbol}</Text>
              <Box direction="row"><Anchor href={"https://etherscan.io/token/" + selectedToken?.address} label="View Token" />&nbsp;on Etherscan</Box>
            </Box>
          </Drop>}
        </Box>


        <Box direction="row-responsive" gap="xxsmall" justify="between" fill="horizontal">

          { /* Input Field for Token Balance */}
          {!value && <Box direction="row" style={{ borderBottom: "1px solid black"}}><Form>
            <FormField
              validate={() => validateInput()}>
              <TextInput
                style={{ minWidth: "212px" }}
                placeholder="100,000,000.000"
                value={displayAmount}
                onChange={event => renderDisplayAmount(event.target.value)
                }
              />
            </FormField>
          </Form></Box>}

          { /* Amount Display for Token Balance */}
          {value &&
            <Box flex="shrink" direction="row" style={{ borderBottom: "1px solid #EEEEEE", alignItems: "center" }} onClick={(event) => {
              if (event.detail == 2) {
                copyAndHighlight("tokenValue");
              }
            }}>
              <Text style={{ width: "212px" }} 
                truncate={true} 
                id="tokenValue">
                  {(precision) ? new bigNumber(value).toFormat(precision) + 
                  ((value.toString().includes('.') && (value.toString().split('.')[1].length > precision)) ? '…' : '')
                  : new bigNumber(value).toFormat()}
              </Text>
            </Box>}


          { /* Token Icon/Ticker Display */}
          {tokens.length == 1 && <Box fill="horizontal" direction="row" gap="small" align="center"
            border={{
              side: 'bottom',
              color: (value) ? '#EEEEEE' : "black"
            }}
            style={{ width: "72", maxWidth: "100px", borderLeft: (!value ? '1px solid #EEEEEE' : undefined) }}>
            {renderToken(selectedToken)}
          </Box>}

          { /* Token Drop-down if multiple tokens specified */}
          {tokens.length > 1 && <Box direction="row" gap="small" align="end"
            fill="horizontal"
            style={{ width: "120px", alignContent: "end", borderLeft: '1px solid #EEEEEE', borderBottom: '1px solid black' }}>
            <Select plain
              children={renderToken}
              options={tokens}
              value={value}
              labelKey="label"
              onChange={({ option }) => setToken(option)}
              valueLabel={renderToken(selectedToken)}
              onClose={() => (search ? setOptions(tokens) : undefined)}
              searchPlaceholder={(search ? "Search" : undefined)}
              onSearch={search ? text => updateSearchList(text) : undefined}
            /></Box>}
        </Box>

        { /* Balance/Limit if specified */}
        {(balance || limit) && <Box direction="row" alignSelf="end" gap="small" >
          {balance ? <Text size="small" alignSelf="end" truncate={true}>Balance : {new bigNumber(balance).toFormat()}</Text> :
            <Text size="small" alignSelf="end" truncate={true}>Limit : {new bigNumber(limit).toFormat()}</Text>}
          {balance ? setMax(balance) : setMax(limit)}
        </Box>}

      </Box>
    </AxisTheme>
  );
};

extendDefaultTheme(defaultThemeProps);

Erc20Widget.defaultProps = {
  tokens: [
    {
      symbol: "DAI",
      logo: "",
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      decimals: 12
    }
  ],
  ...defaultProps
};

export default withTheme(Erc20Widget)