export interface ProjectData {
  title: string;
  location: string;
  createdBy: string;
  date: string;
  idUser: string;
}

export const initialState: ProjectData = {
  title: "",
  location: "",
  createdBy: "",
  date: "",
  idUser: "",
};
