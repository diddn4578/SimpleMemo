import Realm from 'realm';

export interface TypeMemo {
  id: number;
  content: string;
}

class Memo {
  public static schema: Realm.ObjectSchema;
}

Memo.schema = {
  name: 'Memo',
  primaryKey: 'id',
  properties: {
    id: 'int',
    content: 'string',
  },
};

let realm = new Realm({schema: [Memo]});

export default realm;
