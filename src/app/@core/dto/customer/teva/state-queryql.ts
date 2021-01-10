import gql from 'graphql-tag';

export const findStateByBatchIdQuery = gql`query findStateByBatchId($page: Int!, $size: Int!, $sort: String!, $order: String!, $batchId: String! ) {
 findStateByBatchId(page: $page, size: $size, sort: $sort, order: $order, batchId: $batchId) {
   batchId
   batchAgeInMin
    monitored {
    co2
    onlinePH
    }
  }
}`;

