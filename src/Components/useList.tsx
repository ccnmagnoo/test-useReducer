import React from 'react';

function useList(array?: string[]) {
  const [content, setContent] = React.useState<string[] | null | undefined>([]);

  React.useEffect(() => {
    //set content
    setContent(array);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [array]);

  return [
    <ul>
      {content?.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>,
    array?.length ?? 0,
  ];
}

export default useList;
