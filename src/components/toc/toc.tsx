import React, { useState } from 'react';
import { getHeadingWithState } from './help';
import { Heading } from './type';

interface Props {
  headings: Heading[];
  /** 收起嵌套的标题，仅展开h1 */
  collapsed: boolean;
}

const Toc: React.FC<Props> = (props) => {
  const [headingWithRelation, setHeadingWithRelation] = useState(() =>
    getHeadingWithState(props.headings),
  );

  return (
    <div className="flex flex-col">
      {headingWithRelation.map((h) => (
        <div style={{ paddingLeft: `${2 * h.level - 1}` }} key={h.id}>
          {h.title}
        </div>
      ))}
    </div>
  );
};
export default React.memo(Toc);
