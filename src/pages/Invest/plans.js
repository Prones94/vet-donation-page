import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../../assets';

export const plans = [
  {
    payment: 'basic',
    icon: <PlanFreeIcon />,
    price: 1000,
    caption: 'you get 500 a share',
    labelAction: 'current plan'
  },
  {
    payment: 'starter',
    icon: <PlanStarterIcon />,
    price: 5000,
    caption: 'you get 2,500 a share',
    labelAction: 'choose starter'
  },
  {
    payment: 'premium',
    icon: <PlanPremiumIcon />,
    price: 9.99,
    caption: 'you get __ a share',
    labelAction: 'choose premium'
  }
];