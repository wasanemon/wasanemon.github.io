#!/usr/bin/env bash
# サイトのベースURL(canonical / OGP / sitemap / robots)を一括で書き換えるスクリプト。
#
# 使い方:
#   ./tools/set-base-url.sh https://<username>.github.io/<repo>
#   ./tools/set-base-url.sh https://your-domain.com        # 独自ドメイン設定時
#
# 現在のベースURLは .base-url に記録され、次回実行時の置換元になります。
set -euo pipefail

cd "$(dirname "$0")/.."

NEW="${1:?使い方: $0 <ベースURL(末尾スラッシュなし)>}"
NEW="${NEW%/}"
OLD="$(cat .base-url)"
OLD="${OLD%/}"

if [ "$NEW" = "$OLD" ]; then
  echo "ベースURLは既に $NEW です。変更はありません。"
  exit 0
fi

for f in index.html 404.html sitemap.xml robots.txt; do
  [ -f "$f" ] || continue
  perl -pi -e "s|\Q$OLD\E|$NEW|g" "$f"
  echo "更新: $f"
done

printf '%s\n' "$NEW" > .base-url
echo "ベースURLを変更しました: $OLD -> $NEW"
