import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../../assets';

export const plans = [
  {
    payment: 'option 1',
    icon: <PlanFreeIcon />,
    price: 1000,
    share: 500,
    custom: false,
  },
  {
    payment: 'option 2',
    icon: <PlanStarterIcon />,
    price: 5000,
    share: 2500,
    custom: false,
  },
  {
    payment: 'custom option',
    icon: <PlanPremiumIcon />,
    price: 6000,
    share: 3000,
    custom: true,
  }
];