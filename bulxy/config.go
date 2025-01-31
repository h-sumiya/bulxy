package bulxy

type Config struct {
	Hostname    string           `toml:"hostname" json:"hostname"`
	Description *string          `toml:"description,omitempty" json:"description,omitempty"`
	Dir         *string          `toml:"dir,omitempty" json:"dir,omitempty"`
	AuthKey     *string          `toml:"auth_key,omitempty" json:"auth_key,omitempty"`
	Ephemeral   *bool            `toml:"ephemeral,omitempty" json:"ephemeral,omitempty"`
	Dashboard   *int             `toml:"dashboard,omitempty" json:"dashboard,omitempty"`
	Proxy       map[string]Proxy `toml:"proxy" json:"proxy"`
	File        map[string]File  `toml:"file" json:"file"`
}

type Proxy struct {
	DisplayName *string `toml:"display_name,omitempty" json:"display_name,omitempty"`
	Description *string `toml:"description,omitempty" json:"description,omitempty"`
	From        int     `toml:"from" json:"from"`
	To          int     `toml:"to" json:"to"`
	Mode        string  `toml:"mode" json:"mode"`
}

type File struct {
	DisplayName *string `toml:"display_name,omitempty" json:"display_name,omitempty"`
	Description *string `toml:"description,omitempty" json:"description,omitempty"`
	Dir         string  `toml:"dir" json:"dir"`
	From        int     `toml:"from" json:"from"`
}
