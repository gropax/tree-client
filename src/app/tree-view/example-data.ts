import { Tree, Node } from '../services/trees.service';

/** Example file/folder data. */
export const files = [
  new Tree('00000000-0000-0000-0000-000000000000', 'My Tree', 'A cool tree.', new Date(), new Date(),
    [
      new Node('00000000-0000-0000-0000-000000000000', 'Child 1', 'A cool node.', new Date(), new Date(),
        [
          new Node('00000000-0000-0000-0000-000000000000', 'Child A', 'A cool node.', new Date(), new Date(), []),
          new Node('00000000-0000-0000-0000-000000000000', 'Child B', 'A cool node.', new Date(), new Date(), []),
        ]),
      new Node('00000000-0000-0000-0000-000000000000', 'Child 2', 'A cool node.', new Date(), new Date(),
        [
          new Node('00000000-0000-0000-0000-000000000000', 'Child C', 'A cool node.', new Date(), new Date(), []),
          new Node('00000000-0000-0000-0000-000000000000', 'Child D', 'A cool node.', new Date(), new Date(), []),
        ]),
    ]),
];
