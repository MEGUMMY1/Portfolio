import React from 'react';
import Image from 'next/image';

export function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <Image src="icon/next_arrow.png" alt="arrow" width={100} height={100} />
    </div>
  );
}

export function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <Image src="icon/prev_arrow.png" alt="arrow" width={100} height={100} />
    </div>
  );
}
