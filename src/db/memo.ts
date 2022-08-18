import realm from '.';

export const createMemo = (id: number, content: string) => {
  return realm.write(() => {
    realm.create('Memo', {
      id: id,
      content: content,
    });
  });
};
