export interface BoardResponseDto {
  id: string;
  category: string;
  name: string;
  description: string;
  writable: boolean;
  isDeleted: boolean;
  circleId: string;
  circleName: string;
  createRoleList: string[];
}
