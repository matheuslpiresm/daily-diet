import { Container, LogoContainer, Logo } from './styles';

import logoImg from '@assets/logo.png';
import avatarImg from '@assets/avatar.png';

export function Home() {

    return (
        <Container>
            <LogoContainer>
                <Logo source={logoImg} />
                <Logo source={avatarImg} />
            </LogoContainer>
        </Container>
    )
}