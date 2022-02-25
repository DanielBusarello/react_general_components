import React from 'react';

import { Container, Slides, Input, Slide, Image, Navigation, NavButton, Navigator, Label } from './styles';

function Slider() {
    return (
        <Container>
            <Slides>
                <Input type='radio' name='radio1' id='radio1' />
                <Input type='radio' name='radio2' id='radio2' />
                <Input type='radio' name='radio3' id='radio3' />
                <Input type='radio' name='radio4' id='radio4' />

                <Slide>
                    <Image src='https://cdn.pixabay.com/photo/2022/02/12/13/29/desert-7008952_960_720.jpg' />
                </Slide>
                <Slide>
                    <Image src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg' />
                </Slide>
                <Slide>
                    <Image src='https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg' />
                </Slide>
                <Slide>
                    <Image src='https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg' />
                </Slide>

                <Navigation>
                    <NavButton>

                    </NavButton>
                </Navigation>
            </Slides>

            <Navigator>
                <Label for='radio1'>

                </Label>
                <Label for='radio2'>

                </Label>
                <Label for='radio3'>

                </Label>
                <Label for='radio4'>

                </Label>
            </Navigator>
        </Container>
    )
}

export default Slider;