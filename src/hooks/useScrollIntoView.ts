export function useScrollIntoView():void {
   const body = document.querySelector('#root');
   
   body.scrollIntoView({behavior: 'smooth'});
}