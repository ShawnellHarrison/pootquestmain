'use client';

import React from 'react';

// Define the props for our component
interface StripeBuyButtonProps {
  buyButtonId: string;
  publishableKey: string;
}

// Since <stripe-buy-button> is a custom element, we need to tell TypeScript
// how to handle it in JSX.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
}

const StripeBuyButton: React.FC<StripeBuyButtonProps> = ({ buyButtonId, publishableKey }) => {
  // This component will render the <stripe-buy-button> web component
  // which is loaded from the script in layout.tsx.
  return (
    <stripe-buy-button
      buy-button-id={buyButtonId}
      publishable-key={publishableKey}
    />
  );
};

export default StripeBuyButton;
