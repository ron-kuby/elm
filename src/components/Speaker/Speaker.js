import React from 'react';
import styled, { keyframes } from 'styled-components';
import gif from '../../elmloopsmall.gif';

import { SpeakerComponent } from './speaker.styles';

const Speaker = () => {

    return (
        <SpeakerComponent src={gif}>
        </SpeakerComponent>
    )
}

export default Speaker