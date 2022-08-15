import React, { Component } from 'react';
import {PageHeader} from 'grommet';

class BlogPageHeader extends Component {
  render() {
    console.log('The page header ', this);
    return (
      <div>
      <PageHeader title="Errorr 404 Zone !! "
      subtitle="Blog Post For Crazy People"
      alignSelf='center'>
      </PageHeader>
      </div>
    )
  }
}

export default BlogPageHeader