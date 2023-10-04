import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Path: /clientstatus

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name ClientStatus with the name for the new component.
function ClientStatusPage() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  // const store = useSelector((store) => store);
  // const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>Client Status Page</h2>
    </div>
  );
}

export default ClientStatusPage;