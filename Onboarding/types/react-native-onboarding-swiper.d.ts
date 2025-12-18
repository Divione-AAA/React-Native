declare module 'react-native-onboarding-swiper' {
  import { ComponentType } from 'react';
  import { ImageSourcePropType } from 'react-native';

  interface Page {
    backgroundColor: string;
    image: React.ReactNode;
    title: string;
    subtitle: string;
  }

  interface OnboardingProps {
    pages: Page[];
    onSkip?: () => void;
    onDone?: () => void;
    showSkip?: boolean;
    showNext?: boolean;
    showDone?: boolean;
  }

  const Onboarding: ComponentType<OnboardingProps>;
  export default Onboarding;
}
