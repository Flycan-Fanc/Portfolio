import myProfileFile from "./assets/MyResume.pdf";

export const handleResumeDownload = () => {
  const anchor = document.createElement("a");
  anchor.href = myProfileFile;
  anchor.download = "范厚琳-前端-19264523091.pdf";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
