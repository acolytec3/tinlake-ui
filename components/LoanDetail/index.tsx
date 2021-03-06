import * as React from 'react';
import Tinlake from 'tinlake';
import { LoansState, getLoan, subscribeDebt } from '../../ducks/loans';
import { connect } from 'react-redux';
import Alert from '../Alert';
import { Box, FormField, TextInput, Button, Heading } from 'grommet';
import NftData from '../NftData';
import SecondaryHeader from '../SecondaryHeader';
import LoanData from '../LoanData';
import Auth from '../Auth';
import config from '../../config'
import Link from 'next/link';
import { BackLink } from '../BackLink';

const { isDemo }  = config
interface Props {
  loanId: string;
  mode: 'borrower' | 'admin' | '';
  tinlake: Tinlake;
  loans?: LoansState;
  getLoan?: (tinlake: Tinlake, loanId: string, refresh?: boolean) => Promise<void>;
  subscribeDebt?: (tinlake: Tinlake, loanId: string) => () => void;
}

class LoanDetail extends React.Component<Props> {
  discardDebtSubscription = () => { };

  componentWillMount() {
    this.props.getLoan!(this.props.tinlake, this.props.loanId);
    this.discardDebtSubscription = this.props.subscribeDebt!(this.props.tinlake, this.props.loanId);
  }

  componentWillUnmount() {
    this.discardDebtSubscription();
  }

  render() {
    const { loans, loanId, tinlake, mode } = this.props;
    const { singleLoan, singleLoanState } = loans!;

    if (singleLoanState === null || singleLoanState === 'loading') { return null; }
    if (singleLoanState === 'not found') {
      return <Alert margin="medium" type="error">
        Could not find loan {loanId}</Alert>;
    }

    const { status, loanOwner } = singleLoan!;
    return <Box>
      <SecondaryHeader>
        <Box direction="row" gap="small" align="center">
          <BackLink href={`/${mode}`} /> 
          <Heading level="3">View Loan {loanId}</Heading>
        </Box>

        <Box direction="row" gap="small" align="center">
          {status === 'Whitelisted' &&
            <Auth tinlake={tinlake}
              render={auth => ( auth.isAdmin && !isDemo ) ?
              <Link href={`/admin/unwhitelist-nft?loanId=${loanId}`}>
                <Button primary label="Unwhitelist" />
              </Link> : null} />
          }
          {status === 'Whitelisted' && loanOwner === tinlake.ethConfig.from &&
            <Link href={`/borrower/borrow?loanId=${loanId}`}><Button primary label="Borrow" /></Link>}
          {status === 'Ongoing' && loanOwner === tinlake.ethConfig.from &&
            <Link href={`/borrower/repay?loanId=${loanId}`}><Button primary label="Repay" /></Link>}
        </Box>
      </SecondaryHeader>

      <Box pad={{ horizontal: 'medium' }}>
        <Box direction="row" gap="medium" margin={{ bottom: 'medium', top: 'large' }}>
          <Box basis={'1/4'} gap="medium"><FormField label="Loan ID">
            <TextInput value={loanId} disabled /></FormField></Box>
          <Box basis={'1/4'} gap="medium"><FormField label="Loan Status">
            <TextInput value={status} disabled /></FormField></Box>
          <Box basis={'1/4'} gap="medium" />
          <Box basis={'1/4'} gap="medium" />
        </Box>

        <LoanData loan={singleLoan!} />

        <NftData data={singleLoan!} authedAddr={tinlake.ethConfig.from} />
      </Box>
    </Box>;
  }
}

export default connect(state => state, { getLoan, subscribeDebt })(LoanDetail);
