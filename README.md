# WIP ⚠️ 
# not-tinder-ui
A Tinder like UI set of components for react-native

<img width="1233" alt="Screen Shot 2020-04-12 at 00 45 04" src="https://user-images.githubusercontent.com/29029506/79090508-4fd4e800-7d20-11ea-8030-c55a17e7bdfd.png">

# Get Started

### Instalation:
Using npm, run:  `npm install nottinderuikit`
Using yarn, run: `yarn add nottinderuikit`

### Usage:
Start using the components in your app:
```js
import {RoundedButton} from 'nottinderuikit';
import AntDesign from '@expo/vector-icons/AntDesign';

  <RoundButton onPress={() => horizontalSwipe(true)} shadow border>
    <AntDesign name='heart' size={30} color={colors.green} />
  </RoundButton>

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
