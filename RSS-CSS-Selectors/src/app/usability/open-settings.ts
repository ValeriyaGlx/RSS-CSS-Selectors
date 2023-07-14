import '../view/main/settings-panel/settingsPanel.css';
import '../view/header/header.css';

export default function openSettings(): void {
  document.querySelector('.background')?.classList.toggle('background-active');
  document.querySelector('.open-settings-toggle')?.classList.toggle('hidden');
  document.querySelector('.open-settings')?.classList.toggle('active');
  if (document.querySelector('.open-settings')?.classList.contains('active')) {
    (document.querySelector('.settings') as HTMLElement).style.transform = 'translate(0%, 0px)';
  } else {
    (document.querySelector('.settings') as HTMLElement).style.transform = 'translate(100%, 0px)';
  }
}

export function closeSetWindow(e: Event): void {
  const modal1 = e.composedPath().includes(document.querySelector('.settings') as HTMLElement);
  const modal2 = e.composedPath().includes(document.querySelector('.open-settings') as HTMLElement);

  if (!modal1 && !modal2 && document.querySelector('.background-active')) {
    openSettings();
  }
}
