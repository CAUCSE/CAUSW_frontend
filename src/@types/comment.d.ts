declare namespace Comment {
  export interface Dto {
    postId: string;
    id: string;
    writerName: string;
    writerAdmissionYear: number;
    writerProfileImage: string | null;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    // isDeleted: boolean;
    // parentCommentId?: any;
    childCommentList: Dto[];
    updatable: boolean;
    deletable: boolean;
  }
}
