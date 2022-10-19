import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={302}
    height={130}
    viewBox="0 0 302 130"
    backgroundColor="#e44949"
    foregroundColor="#f4d7d7"
    {...props}>
    <rect x="510" y="414" rx="0" ry="0" width="101" height="3" />
    <rect x="17" y="-1" rx="18" ry="18" width="255" height="134" />
  </ContentLoader>
);

export default Skeleton;
