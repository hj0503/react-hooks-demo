import React from 'react';
import SimplePanel from '../../../../components/SimplePanel';
import ClassComponent from './ClassComponent'
import HooksComponent from './HooksComponent'

export default function UseStateDemo() {
  return (
    <SimplePanel title="useEffect">
      <ClassComponent />
      <HooksComponent />
    </SimplePanel>
  );
}
