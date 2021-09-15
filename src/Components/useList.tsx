import React from 'react';

function useList(array?: string[]) {
  const [content, setContent] = React.useState<string[] | null | undefined>([]);

  React.useEffect(() => {
    //set content
    setContent(array);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [
    <ul>
      {content?.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>,
    array?.length ?? 0,
  ];
}

export default useList;
