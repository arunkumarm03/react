/**
 * Dasboard Routes
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

// page title bar
import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';

// rct collapsible card
import RctCollapsibleCard from '../../components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from '../../util/IntlMessages';


import {
  VisitorAreaChartWidget,
  SalesAreaChartWidget,
  OrdersAreaChartWidget,
  RecentOrdersWidget,
  Notifications
} from "../../components/Widgets";

// widgets data
import {
  visitorsData,
  salesData,
  ordersData
} from './data';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-wrapper">
        <Helmet>
          <title>gTools | Dashboard</title>
          <meta name="description" content="gTools Dashboard Page" />
        </Helmet>
        <PageTitleBar title={<IntlMessages id="sidebar.dashboard" />} match={this.props.match} />
        <div className="row">
          <div className="col-sm-6 col-md-4 w-xs-half-block">
            <VisitorAreaChartWidget
              data={visitorsData}
            />
          </div>

          <div className="col-sm-12 col-md-4 w-xs-half-block">
            <OrdersAreaChartWidget
              data={ordersData}
            />
          </div>
          <div className="col-sm-6 col-md-4 w-xs-full">
            <SalesAreaChartWidget
              data={salesData}
            />
          </div>
        </div>
        <div className="row">
          <RctCollapsibleCard
            colClasses="col-sm-12 col-md-4 col-lg-4 w-xs-full"
            fullBlock
            customClasses="overflow-hidden"
          >
            <Notifications />
          </RctCollapsibleCard>
          <RctCollapsibleCard
            colClasses="col-sm-12 col-md-8 col-lg-8 w-xs-full"
            heading={<IntlMessages id="widgets.RecentOrders" />}
            collapsible
            reloadable
            closeable
            fullBlock
          >
            <RecentOrdersWidget />
          </RctCollapsibleCard>
        </div>
      </div>
    );
  }
}
