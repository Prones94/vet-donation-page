import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../../assets';

export const plans = [
  {
    payment: 'option 1',
    icon: <PlanFreeIcon />,
    price: 1000,
    custom: false,
  },
  {
    payment: 'option 2',
    icon: <PlanStarterIcon />,
    price: 5000,
    custom: false,
  },
  {
    payment: 'custom option',
    icon: <PlanPremiumIcon />,
    price: 6000,
    custom: true,
  }
];