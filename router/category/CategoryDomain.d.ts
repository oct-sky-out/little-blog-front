export default interface CategoryDomain {
  id: string;
  name: string;
  baseField: {
    createdAt: string;
    updatedAt: string | null;
    version: number;
    isDeleted: 0 | 1;
  };
  parentId: string | null;
}
