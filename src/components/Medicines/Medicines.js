import { Fragment } from 'react';

import AvailableMedicines from './AvailableMedicines';

const Medicines = (props) => {

  return (
    <Fragment>
      <AvailableMedicines onAddItem={props.onAddItem}/>
    </Fragment>
  );
};

export default Medicines;
