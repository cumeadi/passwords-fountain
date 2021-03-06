import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import {
    Wrapper,
    Paragraph,
    AuthorContactWrapper,
    AuthorContact,
    InnerWrapper,
    ParagraphsWrapper,
    IconWrapper,
    AuthorsWrapper,
    Center,
} from './home.styles';
import { Banner } from '@/modules/home/components/banner';
import { Segment } from '@/modules/home/components/segment';
import { Text } from '@/modules/localisation/components/text';
import { IconAuthors } from '@/modules/home/components/iconAuthors';
import { StartGuide } from '@/modules/home/components/startGuide';
import { Icon } from '@/common/components/icon';
import { PhoneChat } from '@/modules/home/components/phoneChat';

export const Home: TypedComponent<{}> = () => {
    return (
        <Wrapper>
            <Banner />
            <Segment id="how-it-works" title="home.howItWorks">
                <Center>
                    <PhoneChat />
                </Center>
            </Segment>
            <Segment id="how-to-start" title="home.howToStart">
                <InnerWrapper>
                    <div>
                        <ParagraphsWrapper>
                            <ParagraphsWrapper>
                                <Paragraph>
                                    <Text withMarkup>home.toStart</Text>
                                </Paragraph>
                            </ParagraphsWrapper>
                            <Paragraph>
                                <Text withMarkup>home.followGuide</Text>
                            </Paragraph>
                        </ParagraphsWrapper>
                        <StartGuide />
                    </div>
                    <IconWrapper>
                        <Icon name="database" />
                    </IconWrapper>
                </InnerWrapper>
            </Segment>
            <Segment id="pricing" title="home.pricing">
                <Paragraph>
                    <Text withMarkup>home.completelyFree</Text>
                </Paragraph>
                <Paragraph>
                    <Text withMarkup>home.visitFaunaPricing</Text>
                </Paragraph>
            </Segment>
            <Segment id="newsletter" title="home.newsletter">
                <Paragraph>
                    <Text withMarkup>home.visitNewsletter</Text>
                </Paragraph>
            </Segment>
            <Segment id="authors" title="home.authors">
                <InnerWrapper>
                    <AuthorsWrapper>
                        <ParagraphsWrapper>
                            <Paragraph>
                                <Text>home.helloFromAuthor</Text>
                            </Paragraph>
                            <Paragraph>
                                <Text>home.dontHesitateToContact</Text>
                            </Paragraph>

                            <AuthorContactWrapper>
                                <Paragraph>
                                    <AuthorContact>
                                        {process.env.AUTHOR_CONTACT}
                                    </AuthorContact>
                                </Paragraph>
                            </AuthorContactWrapper>
                        </ParagraphsWrapper>
                        <IconAuthors />
                    </AuthorsWrapper>
                    <div>
                        <IconWrapper>
                            <Icon name="love" />
                        </IconWrapper>
                    </div>
                </InnerWrapper>
            </Segment>
        </Wrapper>
    );
};
