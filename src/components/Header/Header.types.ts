export interface HeaderProps {
  isListGoalsPage: boolean;
  shownButtonBack: boolean;
  setIsListGoalsPage: (value: boolean) => void;
  onBackButtonClick: () => void;
}
