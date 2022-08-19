import {Results} from 'realm';
import realm, {TypeMemo} from '.';

export const createMemo = (id: number, content: string) => {
  return realm.write(() => {
    realm.create('Memo', {
      id: id,
      content: content,
    });
  });
};

export const updateMemo = (id: number, content: string) => {
  const detail: Results<any> = realm.objects('Memo').filtered(`id=${id}`);
  return realm.write(() => {
    detail[0].content = content;
  });
};

export const findOneMemo = (id: number) => {
  return realm.objects('Memo').filtered(`id=${id}`);
};

export const findAllMemo = () => {
  return realm.objects('Memo').sorted('id', true);
};
