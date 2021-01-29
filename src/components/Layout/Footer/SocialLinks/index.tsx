import React from 'react';

import {SocialSpace} from "@Custom/SocialSpace";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialLinks = () => {

    return (
        <SocialSpace>
            <FacebookIcon fontSize={"large"}/>
            <InstagramIcon fontSize={"large"}/>
            <LinkedInIcon fontSize={"large"}/>
        </SocialSpace>
    );
};

export default SocialLinks