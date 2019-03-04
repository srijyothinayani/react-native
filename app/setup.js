import React, { Component } from 'react';

import { AsyncStorage, NativeModules } from 'react-native';

import { Scene, Router, Actions } from 'react-native-router-flux';

import CreditTypes from './routes/creditTypes';
import Dashboard from './routes/dashboard';
import LoginPage from './routes/loginpage';
import PropertyType from './routes/propertyType';
import PropertyValue from './routes/propertyValue';
import MortgageBalance from './routes/mortgageBalance';
import InterestRates from './routes/interestRates';
import DownPayament from './routes/DownPayment';
import Bankrupts from './routes/Bankrupts';
import LoanTypes from './routes/LoanTypes';
import Veteran from './routes/Veteran';
import Lates from './routes/lates';
import Borrow from './routes/Borrow';
import PropertyInfo from './routes/PropertyInfo';
import HomeOwner from './routes/HomeOwner';
import Estimation from './routes/Estimation'


export default class Setup extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="LoginPage" component={LoginPage} title="LoginPage" type="replace" hideNavBar initial={true} />
                    <Scene key="Dashboard" component={() => <Dashboard />} title="Dashboard" type="replace" hideNavBar />
                    <Scene key="PropertyType" component={() => <PropertyType />} title="PropertyType" type="replace" hideNavBar />
                    <Scene key="CreditTypes" component={() => <CreditTypes />} title="CreditTypes" type="replace" hideNavBar />
                    <Scene key="PropertyValue" component={() => <PropertyValue />} title="PropertyValue" type="replace" hideNavBar />
                    <Scene key="MortgageBalance" component={() => <MortgageBalance />} title="MortgageBalance" type="replace" hideNavBar />
                    <Scene key="InterestRates" component={() => <InterestRates />} title="InterestRates" type="replace" hideNavBar />
                    <Scene key="DownPayament" component={() => <DownPayament />} title="DownPayament" type="replace" hideNavBar />
                    <Scene key="Bankrupts" component={() => <Bankrupts />} title="Bankrupts" type="replace" hideNavBar />
                    <Scene key="LoanTypes" component={() => <LoanTypes />} title="LoanTypes" type="replace" hideNavBar />
                    <Scene key="Veteran" component={() => <Veteran />} title="Veteran" type="replace" hideNavBar />
                    <Scene key="Lates" component={() => <Lates />} title="Lates" type="replace" hideNavBar />
                    <Scene key="Borrow" component={() => <Borrow />} title="Borrow" type="replace" hideNavBar />
                    <Scene key="PropertyInfo" component={() => <PropertyInfo />} title="PropertyInfo" type="replace" hideNavBar />
                    <Scene key="HomeOwner" component={() => <HomeOwner />} title="HomeOwner" type="replace" hideNavBar />
                    <Scene key="Estimation" component={() => <Estimation />} title="Estimation" type="replace" hideNavBar />


                </Scene>
            </Router>
        )
    }
}