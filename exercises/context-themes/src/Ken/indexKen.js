import React from 'react';
import AppKen from '../AppKen';
import {render} from 'react-dom';
import TogglerKen from '../TogglerKen';

render(
    <TogglerKen>
        <AppKen />
    </TogglerKen>
, 
document.getElementById('root')
);