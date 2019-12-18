import React from 'react';
import gif from '../../elmloopslower.gif';

import { SpeakerComponent, SpeakerTitle, SpeakerOffsetOne, SpeakerOffsetTwo, SpeakerOffsetThree, SpeakerOffsetFour } from './speaker.styles';

const Speaker = () => {

    return (
        <div>
            <SpeakerComponent src={gif}>
            </SpeakerComponent>
            <SpeakerTitle>GE Stereophonic <br></br> T-1000C</SpeakerTitle>
            <SpeakerOffsetOne>GE Stereophonic <br></br> T-1000C</SpeakerOffsetOne>
            <SpeakerOffsetTwo>GE Stereophonic <br></br> T-1000C</SpeakerOffsetTwo>
            <SpeakerOffsetThree>GE Stereophonic <br></br> T-1000C</SpeakerOffsetThree>
            <SpeakerOffsetFour>GE Stereophonic <br></br> T-1000C</SpeakerOffsetFour>

        </div>
    )
}

export default Speaker