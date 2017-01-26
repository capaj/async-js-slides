// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#FBDE34"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Asynchronous
            </Heading>
            <Heading size={1} fit caps>
             Javascript
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>at brand embassy</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/deck.example")}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="javascript"
              source={require("raw!../assets/pyramid.example")}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Async vs generators
            </Heading>
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} caps fit textColor="primary">
              Links for reading later
            </Heading>
             <br/>
            
            <Link href="https://www.youtube.com/watch?v=Hn-gkM0ARZU">
             <Text bold caps textColor="tertiary">Promises Are So Passé - Tim Perry - Codemotion </Text>
            </Link>
             <br/>
            
            <Link href="https://www.youtube.com/watch?v=qbKWsbJ76-s">
             <Text bold caps textColor="tertiary">Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013</Text>
            </Link>             
            <br/>
            
            <Link href="https://davidwalsh.name/async-generators">
             <Text bold caps textColor="tertiary">Going Async With ES6 Generators</Text>
            </Link>
            <br/>
            
            <Link href="http://www.2ality.com/2015/03/no-promises.html">
             <Text bold caps textColor="tertiary">No promises: asynchronous JavaScript with only generators</Text>
            </Link>
            
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Questions?
              </Heading>
            </Appear>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
