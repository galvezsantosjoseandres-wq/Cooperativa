/**
 * El trenzado: tres hebras de pleita sobre un mismo eje, desfasadas 120°.
 *
 * El cruce es real, no insinuado. Cada hebra se corta en los puntos donde
 * cambia de profundidad y los tramos de atrás se pintan antes que los de
 * delante, con un encasquillado del color del fondo que abre el hueco. Por eso
 * se lee como trenzado y no como tres cintas paralelas.
 *
 * Cada trayectoria se declara una sola vez en <defs> y se reusa tres veces
 * (encasquillado, fibra, brillo del canto): el marcado pesa un tercio.
 *
 * Vertical en pantalla ancha — es la cabeza del espinazo que recorre la
 * página. Horizontal en móvil, donde una trenza vertical se comería el ancho
 * del texto: la trenza pierde eje, nunca grosor.
 */
export function TrenzaVertical({ className }: { className?: string }) {
  return (
      <svg
        className={className}
        viewBox="0 0 240 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <path id="tv0" d="M173.9 70.0C173.7 72.3 173.7 79.3 172.3 84.0C171.0 88.7 168.8 93.3 166.0 98.0C163.1 102.7 159.5 107.3 155.4 112.0C151.3 116.7 146.5 121.3 141.6 126.0C136.7 130.7 131.2 135.3 125.8 140.0C120.5 144.7 114.8 149.3 109.5 154.0C104.3 158.7 98.9 163.3 94.2 168.0C89.5 172.7 84.9 177.3 81.2 182.0C77.5 186.7 74.2 191.3 71.8 196.0C69.3 200.7 67.6 205.3 66.7 210.0C65.8 214.7 66.6 221.7 66.5 224.0" />
          <path id="tv1" d="M172.0 350.0C172.4 352.3 174.1 359.3 174.0 364.0C173.8 368.7 172.8 373.3 171.0 378.0C169.2 382.7 166.5 387.3 163.3 392.0C160.1 396.7 156.1 401.3 151.7 406.0C147.4 410.7 142.3 415.3 137.2 420.0C132.1 424.7 126.5 429.3 121.2 434.0C115.8 438.7 110.2 443.3 105.0 448.0C99.8 452.7 94.7 457.3 90.2 462.0C85.7 466.7 81.5 471.3 78.1 476.0C74.7 480.7 71.8 485.3 69.8 490.0C67.8 494.7 66.6 499.3 66.2 504.0C65.7 508.7 67.2 515.7 67.4 518.0" />
          <path id="tv2" d="M173.1 644.0C173.2 646.3 174.3 653.3 173.6 658.0C173.0 662.7 171.5 667.3 169.3 672.0C167.0 676.7 164.0 681.3 160.4 686.0C156.8 690.7 152.4 695.3 147.8 700.0C143.2 704.7 138.0 709.3 132.7 714.0C127.5 718.7 121.9 723.3 116.5 728.0C111.1 732.7 105.6 737.3 100.6 742.0C95.5 746.7 90.6 751.3 86.4 756.0C82.2 760.7 78.3 765.3 75.3 770.0C72.3 774.7 69.8 779.3 68.3 784.0C66.7 788.7 66.4 795.7 66.0 798.0" />
          <path id="tv3" d="M173.7 938.0C173.6 940.3 174.0 947.3 172.9 952.0C171.8 956.7 168.1 963.7 167.2 966.0" />
          <path id="tv4" d="M173.8 -28.0C173.6 -25.7 173.9 -18.7 172.7 -14.0C171.5 -9.3 169.5 -4.7 166.8 0.0C164.1 4.7 160.5 9.3 156.6 14.0C152.6 18.7 147.9 23.3 143.0 28.0C138.2 32.7 132.7 37.3 127.4 42.0C122.1 46.7 116.4 51.3 111.1 56.0C105.8 60.7 100.4 65.3 95.6 70.0C90.8 74.7 86.2 79.3 82.3 84.0C78.5 88.7 75.0 93.3 72.5 98.0C69.9 102.7 68.0 107.3 67.0 112.0C66.0 116.7 66.4 123.7 66.3 126.0" />
          <path id="tv5" d="M171.6 252.0C172.0 254.3 174.0 261.3 174.0 266.0C174.0 270.7 173.1 275.3 171.5 280.0C169.9 284.7 167.3 289.3 164.3 294.0C161.2 298.7 157.2 303.3 153.0 308.0C148.7 312.7 143.8 317.3 138.7 322.0C133.7 326.7 128.1 331.3 122.7 336.0C117.4 340.7 111.7 345.3 106.5 350.0C101.3 354.7 96.1 359.3 91.5 364.0C86.9 368.7 82.6 373.3 79.1 378.0C75.6 382.7 72.6 387.3 70.4 392.0C68.3 396.7 66.9 401.3 66.3 406.0C65.7 410.7 66.9 417.7 67.1 420.0" />
          <path id="tv6" d="M172.8 546.0C172.9 548.3 174.3 555.3 173.8 560.0C173.3 564.7 171.9 569.3 169.9 574.0C167.8 578.7 164.9 583.3 161.4 588.0C158.0 592.7 153.7 597.3 149.2 602.0C144.6 606.7 139.4 611.3 134.3 616.0C129.1 620.7 123.4 625.3 118.1 630.0C112.7 634.7 107.1 639.3 102.0 644.0C97.0 648.7 91.9 653.3 87.6 658.0C83.3 662.7 79.3 667.3 76.2 672.0C73.1 676.7 70.5 681.3 68.8 686.0C67.1 690.7 66.1 695.3 66.0 700.0C65.9 704.7 67.8 711.7 68.2 714.0" />
          <path id="tv7" d="M173.6 840.0C173.5 842.3 174.1 849.3 173.2 854.0C172.2 858.7 170.4 863.3 167.9 868.0C165.4 872.7 162.0 877.3 158.3 882.0C154.5 886.7 149.9 891.3 145.1 896.0C140.4 900.7 135.0 905.3 129.7 910.0C124.4 914.7 118.7 919.3 113.4 924.0C108.1 928.7 102.6 933.3 97.7 938.0C92.8 942.7 88.0 947.3 84.0 952.0C80.0 956.7 75.4 963.7 73.6 966.0" />
          <path id="tv8" d="M144.4 -70.0C141.8 -67.7 134.2 -60.7 128.9 -56.0C123.6 -51.3 117.9 -46.7 112.6 -42.0C107.3 -37.3 101.8 -32.7 97.0 -28.0C92.1 -23.3 87.4 -18.7 83.4 -14.0C79.5 -9.3 75.9 -4.7 73.2 0.0C70.5 4.7 68.5 9.3 67.3 14.0C66.1 18.7 66.4 25.7 66.2 28.0" />
          <path id="tv9" d="M174.0 168.0C173.6 170.3 173.4 177.3 171.9 182.0C170.5 186.7 168.1 191.3 165.1 196.0C162.2 200.7 158.4 205.3 154.2 210.0C150.1 214.7 145.2 219.3 140.2 224.0C135.2 228.7 129.6 233.3 124.3 238.0C118.9 242.7 113.3 247.3 108.0 252.0C102.8 256.7 97.5 261.3 92.8 266.0C88.2 270.7 83.8 275.3 80.1 280.0C76.5 284.7 73.3 289.3 71.1 294.0C68.8 298.7 67.2 303.3 66.5 308.0C65.8 312.7 66.7 319.7 66.8 322.0" />
          <path id="tv10" d="M172.4 448.0C172.7 450.3 174.2 457.3 173.9 462.0C173.6 466.7 172.4 471.3 170.4 476.0C168.5 480.7 165.7 485.3 162.4 490.0C159.1 494.7 154.9 499.3 150.5 504.0C146.0 508.7 140.9 513.3 135.8 518.0C130.6 522.7 125.0 527.3 119.6 532.0C114.2 536.7 108.6 541.3 103.5 546.0C98.4 550.7 93.3 555.3 88.9 560.0C84.5 564.7 80.4 569.3 77.1 574.0C73.9 578.7 71.1 583.3 69.3 588.0C67.4 592.7 66.3 597.3 66.1 602.0C65.8 606.7 67.5 613.7 67.8 616.0" />
          <path id="tv11" d="M173.4 742.0C173.4 744.3 174.2 751.3 173.4 756.0C172.6 760.7 170.9 765.3 168.6 770.0C166.2 774.7 163.0 779.3 159.3 784.0C155.7 788.7 151.2 793.3 146.5 798.0C141.8 802.7 136.5 807.3 131.2 812.0C126.0 816.7 120.3 821.3 114.9 826.0C109.6 830.7 104.1 835.3 99.1 840.0C94.2 844.7 89.3 849.3 85.2 854.0C81.1 858.7 77.3 863.3 74.4 868.0C71.6 872.7 69.3 877.3 67.9 882.0C66.5 886.7 66.3 893.7 66.0 896.0" />
          <path id="tv12" d="M66.1 -70.0C66.6 -67.7 67.5 -60.7 69.4 -56.0C71.3 -51.3 74.1 -46.7 77.4 -42.0C80.7 -37.3 84.8 -32.7 89.2 -28.0C93.6 -23.3 98.7 -18.7 103.9 -14.0C109.0 -9.3 114.6 -4.7 120.0 0.0C125.4 4.7 131.0 9.3 136.1 14.0C141.3 18.7 146.4 23.3 150.8 28.0C155.2 32.7 159.3 37.3 162.6 42.0C165.9 46.7 168.7 51.3 170.6 56.0C172.5 60.7 173.6 65.3 173.9 70.0C174.2 74.7 172.6 81.7 172.3 84.0" />
          <path id="tv13" d="M66.7 210.0C66.7 212.3 65.8 219.3 66.5 224.0C67.3 228.7 68.9 233.3 71.2 238.0C73.5 242.7 76.7 247.3 80.4 252.0C84.1 256.7 88.5 261.3 93.2 266.0C97.8 270.7 103.1 275.3 108.4 280.0C113.6 284.7 119.3 289.3 124.7 294.0C130.0 298.7 135.6 303.3 140.5 308.0C145.5 312.7 150.4 317.3 154.5 322.0C158.6 326.7 162.4 331.3 165.3 336.0C168.3 340.7 170.6 345.3 172.0 350.0C173.5 354.7 173.6 361.7 174.0 364.0" />
          <path id="tv14" d="M66.2 504.0C66.4 506.3 66.2 513.3 67.4 518.0C68.6 522.7 70.7 527.3 73.4 532.0C76.2 536.7 79.7 541.3 83.7 546.0C87.7 550.7 92.4 555.3 97.3 560.0C102.2 564.7 107.7 569.3 113.0 574.0C118.3 578.7 124.0 583.3 129.3 588.0C134.6 592.7 140.0 597.3 144.8 602.0C149.6 606.7 154.2 611.3 158.0 616.0C161.8 620.7 165.2 625.3 167.7 630.0C170.2 634.7 172.1 639.3 173.1 644.0C174.1 648.7 173.5 655.7 173.6 658.0" />
          <path id="tv15" d="M68.3 784.0C67.9 786.3 65.9 793.3 66.0 798.0C66.1 802.7 67.0 807.3 68.6 812.0C70.3 816.7 72.9 821.3 76.0 826.0C79.1 830.7 83.0 835.3 87.3 840.0C91.6 844.7 96.6 849.3 101.7 854.0C106.7 858.7 112.3 863.3 117.7 868.0C123.0 872.7 128.7 877.3 133.9 882.0C139.1 886.7 144.3 891.3 148.8 896.0C153.4 900.7 157.7 905.3 161.2 910.0C164.6 914.7 167.6 919.3 169.7 924.0C171.8 928.7 173.2 933.3 173.7 938.0C174.3 942.7 173.0 949.7 172.9 952.0" />
          <path id="tv16" d="M149.5 -70.0C151.5 -67.7 158.2 -60.7 161.7 -56.0C165.1 -51.3 168.0 -46.7 170.0 -42.0C172.0 -37.3 173.4 -32.7 173.8 -28.0C174.3 -23.3 172.9 -16.3 172.7 -14.0" />
          <path id="tv17" d="M67.0 112.0C66.9 114.3 65.7 121.3 66.3 126.0C66.9 130.7 68.4 135.3 70.6 140.0C72.8 144.7 75.8 149.3 79.4 154.0C82.9 158.7 87.2 163.3 91.8 168.0C96.4 172.7 101.7 177.3 106.9 182.0C112.1 186.7 117.8 191.3 123.1 196.0C128.5 200.7 134.0 205.3 139.1 210.0C144.1 214.7 149.1 219.3 153.3 224.0C157.5 228.7 161.4 233.3 164.5 238.0C167.5 242.7 170.0 247.3 171.6 252.0C173.2 256.7 173.6 263.7 174.0 266.0" />
          <path id="tv18" d="M66.3 406.0C66.4 408.3 66.0 415.3 67.1 420.0C68.1 424.7 70.1 429.3 72.7 434.0C75.2 438.7 78.7 443.3 82.6 448.0C86.5 452.7 91.1 457.3 95.9 462.0C100.7 466.7 106.1 471.3 111.5 476.0C116.8 480.7 122.5 485.3 127.8 490.0C133.1 494.7 138.5 499.3 143.4 504.0C148.2 508.7 152.9 513.3 156.9 518.0C160.8 522.7 164.3 527.3 167.0 532.0C169.6 536.7 171.6 541.3 172.8 546.0C173.9 550.7 173.6 557.7 173.8 560.0" />
          <path id="tv19" d="M66.0 700.0C66.4 702.3 66.7 709.3 68.2 714.0C69.7 718.7 72.1 723.3 75.1 728.0C78.1 732.7 81.9 737.3 86.1 742.0C90.3 746.7 95.2 751.3 100.2 756.0C105.2 760.7 110.7 765.3 116.1 770.0C121.5 774.7 127.1 779.3 132.4 784.0C137.6 788.7 142.9 793.3 147.5 798.0C152.1 802.7 156.5 807.3 160.1 812.0C163.7 816.7 166.9 821.3 169.1 826.0C171.3 830.7 172.9 835.3 173.6 840.0C174.2 844.7 173.2 851.7 173.2 854.0" />
          <path id="tv20" d="M67.3 14.0C67.1 16.3 65.7 23.3 66.2 28.0C66.6 32.7 68.0 37.3 70.0 42.0C72.0 46.7 74.9 51.3 78.3 56.0C81.8 60.7 86.0 65.3 90.5 70.0C95.0 74.7 100.2 79.3 105.4 84.0C110.5 88.7 116.2 93.3 121.6 98.0C126.9 102.7 132.5 107.3 137.6 112.0C142.7 116.7 147.7 121.3 152.1 126.0C156.4 130.7 160.4 135.3 163.6 140.0C166.7 144.7 169.4 149.3 171.1 154.0C172.8 158.7 173.8 163.3 174.0 168.0C174.1 172.7 172.3 179.7 171.9 182.0" />
          <path id="tv21" d="M66.5 308.0C66.5 310.3 65.9 317.3 66.8 322.0C67.7 326.7 69.5 331.3 71.9 336.0C74.4 340.7 77.7 345.3 81.5 350.0C85.2 354.7 89.8 359.3 94.5 364.0C99.3 368.7 104.6 373.3 109.9 378.0C115.2 382.7 120.9 387.3 126.2 392.0C131.6 396.7 137.1 401.3 142.0 406.0C146.9 410.7 151.7 415.3 155.7 420.0C159.7 424.7 163.4 429.3 166.2 434.0C169.0 438.7 171.1 443.3 172.4 448.0C173.7 452.7 173.7 459.7 173.9 462.0" />
          <path id="tv22" d="M66.1 602.0C66.3 604.3 66.4 611.3 67.8 616.0C69.1 620.7 71.4 625.3 74.2 630.0C77.1 634.7 80.8 639.3 84.9 644.0C89.0 648.7 93.8 653.3 98.8 658.0C103.7 662.7 109.2 667.3 114.5 672.0C119.9 676.7 125.6 681.3 130.8 686.0C136.1 690.7 141.4 695.3 146.2 700.0C150.9 704.7 155.4 709.3 159.1 714.0C162.8 718.7 166.0 723.3 168.4 728.0C170.8 732.7 172.5 737.3 173.4 742.0C174.2 746.7 173.4 753.7 173.4 756.0" />
          <path id="tv23" d="M67.9 882.0C67.6 884.3 65.8 891.3 66.0 896.0C66.3 900.7 67.3 905.3 69.1 910.0C71.0 914.7 73.7 919.3 76.9 924.0C80.1 928.7 84.2 933.3 88.6 938.0C92.9 942.7 98.0 947.3 103.1 952.0C108.2 956.7 116.5 963.7 119.2 966.0" />
        </defs>
        <g className="trenza" style={{ transformOrigin: "120px 450px" }} strokeLinecap="butt">
        <g>
          <use href="#tv0" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv0" fill="none" stroke="var(--anilina)" strokeWidth={38} />
          <use href="#tv0" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv1" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv1" fill="none" stroke="var(--anilina)" strokeWidth={38} />
          <use href="#tv1" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv2" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv2" fill="none" stroke="var(--anilina)" strokeWidth={38} />
          <use href="#tv2" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv3" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv3" fill="none" stroke="var(--anilina)" strokeWidth={38} />
          <use href="#tv3" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv4" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv4" fill="none" stroke="var(--fibra)" strokeWidth={38} />
          <use href="#tv4" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv5" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv5" fill="none" stroke="var(--fibra)" strokeWidth={38} />
          <use href="#tv5" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv6" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv6" fill="none" stroke="var(--fibra)" strokeWidth={38} />
          <use href="#tv6" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv7" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv7" fill="none" stroke="var(--fibra)" strokeWidth={38} />
          <use href="#tv7" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv8" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv8" fill="none" stroke="var(--ocre)" strokeWidth={38} />
          <use href="#tv8" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv9" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv9" fill="none" stroke="var(--ocre)" strokeWidth={38} />
          <use href="#tv9" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv10" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv10" fill="none" stroke="var(--ocre)" strokeWidth={38} />
          <use href="#tv10" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv11" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv11" fill="none" stroke="var(--ocre)" strokeWidth={38} />
          <use href="#tv11" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv12" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv12" fill="none" stroke="var(--anilina)" strokeWidth={38} />
          <use href="#tv12" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv13" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv13" fill="none" stroke="var(--anilina)" strokeWidth={38} />
          <use href="#tv13" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv14" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv14" fill="none" stroke="var(--anilina)" strokeWidth={38} />
          <use href="#tv14" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv15" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv15" fill="none" stroke="var(--anilina)" strokeWidth={38} />
          <use href="#tv15" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv16" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv16" fill="none" stroke="var(--fibra)" strokeWidth={38} />
          <use href="#tv16" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv17" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv17" fill="none" stroke="var(--fibra)" strokeWidth={38} />
          <use href="#tv17" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv18" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv18" fill="none" stroke="var(--fibra)" strokeWidth={38} />
          <use href="#tv18" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv19" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv19" fill="none" stroke="var(--fibra)" strokeWidth={38} />
          <use href="#tv19" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv20" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv20" fill="none" stroke="var(--ocre)" strokeWidth={38} />
          <use href="#tv20" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv21" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv21" fill="none" stroke="var(--ocre)" strokeWidth={38} />
          <use href="#tv21" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv22" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv22" fill="none" stroke="var(--ocre)" strokeWidth={38} />
          <use href="#tv22" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#tv23" fill="none" stroke="var(--anil-850)" strokeWidth={49} />
          <use href="#tv23" fill="none" stroke="var(--ocre)" strokeWidth={38} />
          <use href="#tv23" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        </g>
      </svg>
  );
}

export function TrenzaHorizontal({ className }: { className?: string }) {
  return (
      <svg
        className={className}
        viewBox="0 0 430 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <path id="th0" d="M-70.0 54.8C-67.7 54.8 -58.3 54.6 -56.0 54.6" />
          <path id="th1" d="M56.0 145.4C58.3 145.4 65.3 146.2 70.0 145.2C74.7 144.2 79.3 142.2 84.0 139.4C88.7 136.7 93.3 133.0 98.0 128.9C102.7 124.8 107.3 119.8 112.0 114.8C116.7 109.8 121.3 104.1 126.0 98.8C130.7 93.6 135.3 88.0 140.0 83.1C144.7 78.2 149.3 73.3 154.0 69.4C158.7 65.4 163.3 61.9 168.0 59.4C172.7 56.9 177.3 55.2 182.0 54.4C186.7 53.7 193.7 54.9 196.0 55.0" />
          <path id="th2" d="M308.0 145.7C310.3 145.5 317.3 145.9 322.0 144.7C326.7 143.4 331.3 141.2 336.0 138.2C340.7 135.3 345.3 131.3 350.0 127.0C354.7 122.8 359.3 117.6 364.0 112.6C368.7 107.5 373.3 101.8 378.0 96.5C382.7 91.3 387.3 85.7 392.0 80.9C396.7 76.1 401.3 71.4 406.0 67.7C410.7 63.9 415.3 60.6 420.0 58.4C424.7 56.1 429.3 54.6 434.0 54.2C438.7 53.7 445.7 55.4 448.0 55.6" />
          <path id="th3" d="M-28.0 145.3C-25.7 145.3 -18.7 146.2 -14.0 145.3C-9.3 144.4 -4.7 142.5 0.0 139.8C4.7 137.2 9.3 133.5 14.0 129.5C18.7 125.4 23.3 120.5 28.0 115.5C32.7 110.5 37.3 104.9 42.0 99.6C46.7 94.3 51.3 88.7 56.0 83.8C60.7 78.8 65.3 73.9 70.0 69.9C74.7 65.9 79.3 62.3 84.0 59.8C88.7 57.2 93.3 55.4 98.0 54.6C102.7 53.7 109.7 54.8 112.0 54.9" />
          <path id="th4" d="M224.0 145.6C226.3 145.5 233.3 146.0 238.0 144.9C242.7 143.7 247.3 141.5 252.0 138.6C256.7 135.8 261.3 131.9 266.0 127.7C270.7 123.4 275.3 118.4 280.0 113.3C284.7 108.2 289.3 102.6 294.0 97.3C298.7 92.0 303.3 86.5 308.0 81.6C312.7 76.8 317.3 72.1 322.0 68.2C326.7 64.4 331.3 61.0 336.0 58.7C340.7 56.4 345.3 54.8 350.0 54.3C354.7 53.7 361.7 55.2 364.0 55.4" />
          <path id="th5" d="M476.0 145.9C478.3 145.6 487.7 144.6 490.0 144.3" />
          <path id="th6" d="M-70.0 130.1C-67.7 127.8 -60.7 121.2 -56.0 116.2C-51.3 111.3 -46.7 105.7 -42.0 100.4C-37.3 95.1 -32.7 89.5 -28.0 84.5C-23.3 79.5 -18.7 74.6 -14.0 70.5C-9.3 66.5 -4.7 62.8 0.0 60.2C4.7 57.5 9.3 55.6 14.0 54.7C18.7 53.8 25.7 54.7 28.0 54.7" />
          <path id="th7" d="M140.0 145.5C142.3 145.4 149.3 146.1 154.0 145.0C158.7 144.0 163.3 141.8 168.0 139.0C172.7 136.3 177.3 132.4 182.0 128.3C186.7 124.1 191.3 119.1 196.0 114.0C200.7 109.0 205.3 103.4 210.0 98.1C214.7 92.8 219.3 87.2 224.0 82.4C228.7 77.5 233.3 72.7 238.0 68.8C242.7 64.9 247.3 61.5 252.0 59.1C256.7 56.6 261.3 55.0 266.0 54.3C270.7 53.7 277.7 55.1 280.0 55.2" />
          <path id="th8" d="M392.0 145.8C394.3 145.6 401.3 145.8 406.0 144.5C410.7 143.2 415.3 140.8 420.0 137.8C424.7 134.8 429.3 130.7 434.0 126.4C438.7 122.1 443.3 116.9 448.0 111.8C452.7 106.7 457.3 101.0 462.0 95.8C466.7 90.5 471.3 85.0 476.0 80.2C480.7 75.5 487.7 69.3 490.0 67.1" />
          <path id="th9" d="M-70.0 54.8C-67.7 54.8 -60.7 53.8 -56.0 54.6C-51.3 55.5 -46.7 57.4 -42.0 60.0C-37.3 62.6 -32.7 66.2 -28.0 70.2C-23.3 74.3 -18.7 79.2 -14.0 84.1C-9.3 89.1 -4.7 94.7 0.0 100.0C4.7 105.3 9.3 110.9 14.0 115.9C18.7 120.8 23.3 125.7 28.0 129.8C32.7 133.8 37.3 137.4 42.0 140.0C46.7 142.6 51.3 144.5 56.0 145.4C60.7 146.2 67.7 145.2 70.0 145.2" />
          <path id="th10" d="M182.0 54.4C184.3 54.5 191.3 53.9 196.0 55.0C200.7 56.2 205.3 58.3 210.0 61.2C214.7 64.0 219.3 67.8 224.0 72.0C228.7 76.2 233.3 81.3 238.0 86.3C242.7 91.4 247.3 97.0 252.0 102.3C256.7 107.6 261.3 113.1 266.0 118.0C270.7 122.9 275.3 127.6 280.0 131.5C284.7 135.3 289.3 138.7 294.0 141.1C298.7 143.5 303.3 145.1 308.0 145.7C312.7 146.3 319.7 144.9 322.0 144.7" />
          <path id="th11" d="M434.0 54.2C436.3 54.4 443.3 54.2 448.0 55.6C452.7 57.0 457.3 59.4 462.0 62.4C466.7 65.5 471.3 69.6 476.0 73.9C480.7 78.3 487.7 86.1 490.0 88.6" />
          <path id="th12" d="M-70.0 115.1C-67.7 117.5 -60.7 125.1 -56.0 129.2C-51.3 133.3 -46.7 137.0 -42.0 139.6C-37.3 142.3 -32.7 144.3 -28.0 145.3C-23.3 146.2 -16.3 145.3 -14.0 145.3" />
          <path id="th13" d="M98.0 54.6C100.3 54.6 107.3 53.9 112.0 54.9C116.7 55.9 121.3 58.0 126.0 60.8C130.7 63.5 135.3 67.3 140.0 71.4C144.7 75.6 149.3 80.6 154.0 85.6C158.7 90.6 163.3 96.3 168.0 101.5C172.7 106.8 177.3 112.4 182.0 117.3C186.7 122.2 191.3 127.0 196.0 130.9C200.7 134.8 205.3 138.3 210.0 140.8C214.7 143.2 219.3 144.9 224.0 145.6C228.7 146.3 235.7 145.0 238.0 144.9" />
          <path id="th14" d="M350.0 54.3C352.3 54.4 359.3 54.1 364.0 55.4C368.7 56.7 373.3 59.0 378.0 62.0C382.7 65.0 387.3 69.0 392.0 73.3C396.7 77.6 401.3 82.7 406.0 87.8C410.7 92.9 415.3 98.6 420.0 103.8C424.7 109.1 429.3 114.6 434.0 119.4C438.7 124.2 443.3 128.9 448.0 132.6C452.7 136.3 457.3 139.6 462.0 141.8C466.7 144.0 471.3 145.4 476.0 145.9C480.7 146.3 487.7 144.6 490.0 144.3" />
          <path id="th15" d="M14.0 54.7C16.3 54.7 23.3 53.8 28.0 54.7C32.7 55.7 37.3 57.7 42.0 60.4C46.7 63.0 51.3 66.7 56.0 70.8C60.7 74.9 65.3 79.9 70.0 84.9C74.7 89.9 79.3 95.5 84.0 100.8C88.7 106.1 93.3 111.6 98.0 116.6C102.7 121.5 107.3 126.4 112.0 130.3C116.7 134.3 121.3 137.9 126.0 140.4C130.7 142.9 135.3 144.7 140.0 145.5C144.7 146.3 151.7 145.1 154.0 145.0" />
          <path id="th16" d="M266.0 54.3C268.3 54.5 275.3 54.0 280.0 55.2C284.7 56.4 289.3 58.7 294.0 61.6C298.7 64.5 303.3 68.4 308.0 72.7C312.7 76.9 317.3 82.0 322.0 87.1C326.7 92.1 331.3 97.8 336.0 103.1C340.7 108.4 345.3 113.9 350.0 118.7C354.7 123.5 359.3 128.3 364.0 132.0C368.7 135.8 373.3 139.2 378.0 141.5C382.7 143.7 387.3 145.3 392.0 145.8C396.7 146.3 403.7 144.7 406.0 144.5" />
        </defs>
        <g className="trenza trenza-h" style={{ transformOrigin: "215px 100px" }} strokeLinecap="butt">
        <g>
          <use href="#th0" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th0" fill="none" stroke="var(--anilina)" strokeWidth={34} />
          <use href="#th0" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th1" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th1" fill="none" stroke="var(--anilina)" strokeWidth={34} />
          <use href="#th1" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th2" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th2" fill="none" stroke="var(--anilina)" strokeWidth={34} />
          <use href="#th2" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th3" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th3" fill="none" stroke="var(--fibra)" strokeWidth={34} />
          <use href="#th3" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th4" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th4" fill="none" stroke="var(--fibra)" strokeWidth={34} />
          <use href="#th4" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th5" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th5" fill="none" stroke="var(--fibra)" strokeWidth={34} />
          <use href="#th5" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th6" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th6" fill="none" stroke="var(--ocre)" strokeWidth={34} />
          <use href="#th6" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th7" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th7" fill="none" stroke="var(--ocre)" strokeWidth={34} />
          <use href="#th7" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th8" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th8" fill="none" stroke="var(--ocre)" strokeWidth={34} />
          <use href="#th8" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th9" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th9" fill="none" stroke="var(--anilina)" strokeWidth={34} />
          <use href="#th9" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th10" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th10" fill="none" stroke="var(--anilina)" strokeWidth={34} />
          <use href="#th10" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th11" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th11" fill="none" stroke="var(--anilina)" strokeWidth={34} />
          <use href="#th11" fill="none" stroke="var(--anilina-claro)" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th12" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th12" fill="none" stroke="var(--fibra)" strokeWidth={34} />
          <use href="#th12" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th13" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th13" fill="none" stroke="var(--fibra)" strokeWidth={34} />
          <use href="#th13" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th14" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th14" fill="none" stroke="var(--fibra)" strokeWidth={34} />
          <use href="#th14" fill="none" stroke="#fffbf0" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th15" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th15" fill="none" stroke="var(--ocre)" strokeWidth={34} />
          <use href="#th15" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        <g>
          <use href="#th16" fill="none" stroke="var(--anil-850)" strokeWidth={45} />
          <use href="#th16" fill="none" stroke="var(--ocre)" strokeWidth={34} />
          <use href="#th16" fill="none" stroke="#f3bd7e" strokeWidth={2.2} opacity={0.35} />
        </g>
        </g>
      </svg>
  );
}
