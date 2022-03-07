export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export const TabPanel: React.FC<TabPanelProps> = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`user-tabpanel-${index}`}
      style={{ height: '100%' }}
      aria-labelledby={`user-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};
