import React from 'react';
import styled, { keyframes } from 'styled-components';
import gif from '../../elmloop.gif';

import { SpeakerComponent } from './speaker.styles';

import start from '../../1.png';

const Speaker = () => {

    function over(e){
        e.target.attributes.src = {gif}
    }

    return (
        <SpeakerComponent src={gif}>
        </SpeakerComponent>
    )
}

export default Speaker