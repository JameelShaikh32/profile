import styled, { keyframes, css } from "styled-components";
import { skill_logos_list1 as row1, skill_logos_list2 as row2 } from "../../assets/skill_logos";

function Skills() {
    return (
        <AppContainer data-aos="fade-up">
            <Wrapper>
                <abbr>Skills</abbr>
                <h1>Technical Expertise</h1>
                <Marquee>
                    <MarqueeGroup>
                        {row1.map((el, index) => (
                            <ImageGroup key={index}>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                    <MarqueeGroup>
                        {row1.map((el, index) => (
                            <ImageGroup key={index}>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup>
                </Marquee>
                <Marquee>
                    <MarqueeGroup2>
                        {row2.map((el, index) => (
                            <ImageGroup key={index}>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup2>
                    <MarqueeGroup2>
                        {row2.map((el, index) => (
                            <ImageGroup key={index}>
                                <Image src={el} />
                            </ImageGroup>
                        ))}
                    </MarqueeGroup2>
                </Marquee>
            </Wrapper>
        </AppContainer>
    );
}

export default Skills;

const AppContainer = styled.div`
    width: 100vw;
    color: #000000;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 60px;
    overflow: hidden;
`;

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Marquee = styled.div`
    display: flex;
    width: 1200px;
    overflow: hidden;
    user-select: none;

    mask-image: linear-gradient(
        to right,
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 1) 10%,
        hsl(0 0% 0% / 1) 90%,
        hsl(0 0% 0% / 0)
    );
`;

const scrollX = keyframes`
    from {
    left: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`;

const common = css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    width: 100%;
    animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
    ${common}
`;
const MarqueeGroup2 = styled.div`
    ${common}
    animation-direction: reverse;
    animation-delay: -3s;
`;

const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width: clamp(10rem, 1rem + 40vmin, 30rem);
    padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    aspect-ratio: 16/9;
    padding: 5px 20px;
    transform: scale(1.1);
    transition: transform 0.3s ease;

    &:hover {
            transform: scale(1.2);
            cursor: pointer;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
    }
`;
