# WIP ⚠️ 
# not-tinder-ui
A Tinder like UI set of components for react-native

<img width="1233" alt="Screen Shot 2020-04-12 at 00 45 04" src="https://user-images.githubusercontent.com/29029506/79090508-4fd4e800-7d20-11ea-8030-c55a17e7bdfd.png">

# Get Started

### Instalation:
Using npm, run:  `npm install nottinderuikit`
Using yarn, run: `yarn add nottinderuikit`

### Usage:
Super simple Swipeable card:

![Sample code](https://user-images.githubusercontent.com/29029506/79708485-deec7d80-8295-11ea-864a-e6e8dd7817fa.gif)

#### Code: 
```js
import React, { useState } from 'react'
import { View, Text, Animated } from 'react-native'
import { SwipeableWrapper, MediaCard } from 'nottinderuikit'

const SwipeableCard = () => {
  // Sample Array of images from Unsplash
  const images = [
    {
      uri:
        "https://images.unsplash.com/photo-1586470208442-67c5c1abbc78?ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1516908205727-40afad9449a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1586557009709-63ac91998176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
    },
    {
      uri:
        "https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    },
  ];
  // Here we manage the current image by it's index
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    // This circular loop on the images array
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  // Here we create the initial Animated ValueXY
  const initialPosition = new Animated.ValueXY();
  // verticalCallback is called when the card is swiped up
  const verticalCallback = () => {
    console.log("verticalCallback");
    resetPosition();
  };
  // horizontalCallback is called when the card is swiped horizontally
  // Check isLeftToRight value to know in witch direction it was swiped
  const horizontalCallback = (isLeftToRight: boolean) => {
    if (isLeftToRight) {
      console.log("Is left to right");
    } else {
      console.log("Is right to left");
    }
    resetPosition();
  };

  // In this sample we use resetPosition to re use the same card for this examples
  const resetPosition = (delay: number = 0) => {
    Animated.timing(initialPosition, {
      toValue: { x: 0, y: 0 },
      duration: 250,
      delay,
    }).start();
  };


  return <View
    style={{
      height: "80%",
      width: "100%",
    }}
  >
    <SwipeableWrapper
      positionXY={initialPosition}
      verticalCallback={verticalCallback}
      horizontalCallback={horizontalCallback}
    >
      <MediaCard
        positionXY={initialPosition}
        leftLabel="Yup"
        rightLabel="Nope"
        downLabel="super yup"
        images={images}
        currentImageIndex={currentIndex}
        handleCurrentImageChange={nextImage}
        onBottomPress={() => {
          console.log("bottom press");
        }}
        bottomData={
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>
            Swipe me !
              </Text>
        }
      />
    </SwipeableWrapper>
  </View>

}

export default SwipeableCard
```



### Components Included:
bla bla bla

### Demo app:
We have developed a Tinder like react-native app using this base components, the code is available [here](https://github.com/facundop3/not-tinder)


# Collaborators section:

## Installing git hooks on your local repo:
In order to get this we included a simple sh script that copies the hooks on the `scripts/git-hooks` on the `.git/hooks` folder of this repo and makes them executables.
You just need to run: ```sh scripts/install-hooks``` on the root directory of this repo.

🤪 If you get an error when running this command, you can just copy the content of the `scripts/git-hooks` folder on the `.git/hooks` folder of this repo. Then you'll need to make those files executables by running `chmod +x .git/hooks/*` on the terminal (remember to be steped on the root directory of this repo)
