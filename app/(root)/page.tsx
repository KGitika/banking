import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Gitika', lastName: 'Kalal', email: 'gitikakalal@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account and transaction effciently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        
        RT
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}    //{account?.transactions}
        banks={[{currentBalance:129.0}, {}] }      //{accountsData?.slice(0, 2)}
      />
    </section>
  )
}

export default Home
