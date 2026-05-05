robocopy "../minecraft/mods" "mods" /MIR /XD ".index" /R:3 /W:5
echo "copied mods"

robocopy "../minecraft/config" "overrides/config" /MIR /R:3 /W:5
echo "copied config"

robocopy "../minecraft/kubejs" "overrides/kubejs" /MIR /R:3 /W:5
echo "copied kubejs"

packwiz cf detect
echo "made toml's"

echo "Please bump version number and write commit message"

pause