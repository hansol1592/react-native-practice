# react-native-practice

## build issue

### Android

- android/gradle/wrapper/gradle-wrapper.properties
  - `distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip` 으로 명시. 기존에는 `6.2` 로 되어있음.
- android 폴더에 local.properties 파일 생성
  - `sdk.dir = /Users/<USERNAME>/Library/Android/sdk` 추가
- 안드로이드 장치 버전 문제
  - 'Q API Level 29 image' 의 장치가 필요한데 'R' 버전이 설치되어 있었음.

### IOS

- ios 내부 Flipper-Folly 라이브러리의 버전 문제
  - `use_flipper` 의 버전을 명시하고, pod 을 업데이트 하여 해결하였습니다.
  - 절차
    - ios 폴더 내부 Profile 파일에서 `use_flipper!` 을 `use_flipper!({ 'Flipper-Folly' => '2.3.0' })` 와 같이 변경합니다.
    - ios 폴더 내부로 들어가 pod 을 업데이트 합니다.
      - cd ios
      - pod install
      - pod update
    - 폴더 외부로 나와 다시 ios 를 실행합니다.
      - cd.. && npx react-native run-ios

### Splash

- splash 생성
  - react-native-make
    - react-native-make 설치
    - `npx react-native set-splash --path ./src/assets/images/gowid-splash-logo.png --resize center --background "#5bc500"` 와 같은 명령어로 생성
  - ios
    - Storyboard 설정
      - ./ios/[Project Name].xcwrokspace 파일을 선택해 Xcode 실행

### NetInfo

- react-native 에서 Deprecated 되어 @react-native-community/netinfo 사용
- 설치

- ios

  - `$ npx pod-install`
  - simuator 에서 test 할 경우 정확하게 반응하지 않음
    - 와이파이 변화를 감지하긴 하는데 감지하지 않을 때가 있음
    - 콘솔에 찍은 데이터는 와이파이 연결이 변경되어도 계속 그대로 나오는데 simulator 를 reload 하면 다시 정상적으로 감지해서 콘솔에도 출력함

- android

  - build.gradle 을 수정하는 부분이 있기는 한데 현재 단계에서 필요한지 확인 필요하여 지금은 수정하지 않음.
  - 수정함.
    - 아직 어떤게 android surpport library 인지 잘 모르겠지만 혹시 몰라서 일단 수정

- test
  - real device 가 아닌 환경에서의 테스트는 정확하지 않을 수 있는 듯.
