import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:5',
  releaseNotes: {
    en_US:
      'Refreshes the container with Alpine security updates, including removal of the affected eMudhra CA root, and updates the StartOS SDK to 3.1.0. Existing device profiles remain valid. See https://www.alpinelinux.org/posts/Alpine-3.21.9-3.22.7-3.23.7-3.24.3-released.html for the Alpine security changes.',
    es_ES:
      'Actualiza el contenedor con las correcciones de seguridad de Alpine, incluida la eliminación de la CA raíz de eMudhra afectada, y actualiza el SDK de StartOS a 3.1.0. Los perfiles de dispositivo existentes siguen siendo válidos. Consulta https://www.alpinelinux.org/posts/Alpine-3.21.9-3.22.7-3.23.7-3.24.3-released.html para conocer los cambios de seguridad de Alpine.',
    de_DE:
      'Aktualisiert den Container mit Alpine-Sicherheitskorrekturen, einschließlich der Entfernung des betroffenen eMudhra-Stammzertifikats, und das StartOS SDK auf 3.1.0. Bestehende Geräteprofile bleiben gültig. Die Alpine-Sicherheitsänderungen stehen unter https://www.alpinelinux.org/posts/Alpine-3.21.9-3.22.7-3.23.7-3.24.3-released.html.',
    pl_PL:
      'Aktualizuje kontener o poprawki bezpieczeństwa Alpine, w tym usunięcie powiązanego z incydentem głównego certyfikatu eMudhra, oraz SDK StartOS do wersji 3.1.0. Istniejące profile urządzeń pozostają ważne. Zmiany bezpieczeństwa Alpine opisano na https://www.alpinelinux.org/posts/Alpine-3.21.9-3.22.7-3.23.7-3.24.3-released.html.',
    fr_FR:
      'Actualise le conteneur avec les correctifs de sécurité Alpine, dont la suppression du certificat racine eMudhra concerné, et met à jour le SDK StartOS vers 3.1.0. Les profils existants restent valides. Les changements de sécurité Alpine sont détaillés sur https://www.alpinelinux.org/posts/Alpine-3.21.9-3.22.7-3.23.7-3.24.3-released.html.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
