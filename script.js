import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

const embeddedTemplates = [
  {
    id: "blessing-self-1",
    title: "Blessing Over Myself",
    category: "self",
    text: "I bless myself in the name of the Lord. I speak the purposes of the Kingdom of God into my life and family. I bless my home with the peace of God and release myself into His favor and His best. Whatever the enemy stole, let it be returned in greater measure. I bless the work of my hands to bring life and goodness to others."
  },
  {
    id: "blessing-self-2",
    title: "Blessing of Strength and Courage",
    category: "self",
    text: "I bless myself with the strength of the Lord, for the joy of the Lord is my strength (Nehemiah 8:10). I will be strong and courageous; I will not fear or be discouraged, for the Lord my God is with me wherever I go (Joshua 1:9). I bless my mind with peace and my heart with confidence in Christ."
  },
  {
    id: "blessing-self-3",
    title: "Blessing of Wisdom and Guidance",
    category: "self",
    text: "I bless myself with wisdom from above - pure, peaceable, gentle, and full of mercy (James 3:17). I bless my decisions to be led by the Spirit and not by fear. May the Lord make straight my paths as I trust in Him with all my heart (Proverbs 3:5-6)."
  },
  {
    id: "blessing-self-4",
    title: "Blessing of Identity in Christ",
    category: "self",
    text: "I bless my identity in Christ. I am chosen, redeemed, and dearly loved (Colossians 3:12). I bless myself to walk in the newness of life Jesus purchased for me. Let every lie about who I am fall away as I stand firm in God's truth."
  },
  {
    id: "blessing-self-5",
    title: "Blessing of Peace Over the Mind",
    category: "self",
    text: "I bless my mind with the peace that surpasses all understanding (Philippians 4:7). May every anxious thought bow to the authority of Christ. I bless myself with clarity, soundness, and confidence in the Lord's promises."
  },
  {
    id: "blessing-self-6",
    title: "Blessing of Spiritual Growth",
    category: "self",
    text: "I bless myself to grow in the grace and knowledge of our Lord Jesus Christ (2 Peter 3:18). I bless my hunger for the Word, my sensitivity to the Spirit, and my desire to walk closely with Him. May my roots go deep and my fruit abound."
  },
  {
    id: "blessing-marriage-self-1",
    title: "Blessing for My Marriage",
    category: "marriage_self",
    text: "I bless my marriage with the joy of the Lord. I bless our covenant with the peace of God to rule in our hearts. May we fulfill all God has in store for us. I honor my spouse as a gift from God, and I bless our union to be strong, tender, and guarded by His love."
  },
  {
    id: "blessing-original-marriage-1",
    title: "Blessing for Marriages (Others)",
    category: "marriage_other",
    text: "I bless your marriage with the joy of the Lord. May the peace of God rule in both your hearts. May you fulfill all God has in store for you together. I bless your covenant to be strong, tender, and guarded by His love."
  },
  {
    id: "blessing-original-anyone-1",
    title: "Blessing to Speak Over Anyone",
    category: "anyone",
    text: "May the eyes of your understanding be opened, and may you come into the full hope of the calling of the Lord (see Eph. 1:17). I bless you with good days and long life. May the favor of the Lord be upon you to live in the fullness of His grace! May I be a blessing to you and may I be able to receive blessing from you."
  },
  {
    id: "blessing-original-local-church-1",
    title: "Blessing for Any Church",
    category: "church",
    text: "Lord, we bless this church family. We thank You for Your power to bless. We declare the blessing of the Lord over this church and its place in the community. May it shine Your light, express Your love, and carry Your presence. Let blessing flow through our mouths all week - in our work, families, and friendships. Let our hands be instruments of blessing and our words bring life."
  },
  {
    id: "blessing-original-local-church-or-family-1",
    title: "Blessing for the Local Church or Family",
    category: "household",
    text: "I bless this house today. I call you fellows and joint heirs of the Kingdom of God. I call you into living the fullness of the Lord. I call you to walk in the freedom of the Spirit wherever the Holy Spirit takes you. You are redeemed from the curse of the law but also redeemed for great purposes in God."
  },
  {
    id: "blessing-original-families-1",
    title: "Blessing for Families",
    category: "family",
    text: "I bless you with the revelation of Christ and break off any generational repetitive cycles of sabotage. May you come to recognizing the potential of creativity God has placed in you. You have been translated out of the kingdom of darkness into the family of God. Let the power through the blood of Christ free you from every family curse and root that was not planted in you by your heavenly Father. I declare the name of the Son of God over your life. May you fulfill the destiny and purpose of God! May you honor your father and mother and glorify God here on earth. Your Father in Heaven speaks blessings over you. You are His sons and daughters and you have a hope and a future. Your destiny is sealed through the blood of Jesus and your redemption is paid in full. Your inheritance is in store for you, and none will take you from His hand. Live as one blessing what God has blessed, and you will come into the inheritance of your Father in Heaven."
  },
  {
    id: "blessing-original-favor-1",
    title: "Blessing for Favor",
    category: "favor",
    text: "I bless you with the influence of the Spirit of Christ. I declare over you that your ceiling will soon be your floor. Those who see you will know the Lord inhabits you with favor. I bless you with relationships that build you up and do not tear you down. May you be able to see farther into your destiny than ever before! I bless you with the peace of God to control every thought and the fear of God to establish your feet."
  },
  {
    id: "blessing-original-emotional-healing-1",
    title: "Emotional Healing Prayer",
    category: "emotional_healing",
    description: "This is for those who know what it means to be called everything but a child of God. You have pictures framed in your mind and labels pressed upon you that the Holy Spirit wants to tear off your heart. He wants to pull them off like sticky notes and write His name there. Emotional abuse will cause scars on your heart so you are hesitant to trust and be involved with others. God wants to release you from this hindrance. You might be the one that is the abuser and have used accusations and despairing words to wound. The Lord will heal your memory of what has taken place as you read the prayer.",
    text: "Jesus, we appeal to You as the Bridegroom. Come as a loving Husband and show us what it means to bless and not curse. You have proven You love us so much because You laid down Your life. Come and minister healing to every wife, husband, or young person that has been abused by verbal barrage. Heal the hearts where there are gaping wounds of the past. I release the healing virtue of the Lord to enter the place of the wounding. May your sleep be restful without fear of night terror. Amen."
  }
];

const fallbackCategories = [
  "self",
  "individual",
  "marriage_self",
  "marriage_other",
  "family",
  "household",
  "local_church",
  "favor",
  "anyone",
  "emotional_healing"
];

const storageKey = "blessYou:people";
const themeKey = "blessYou:theme";

const safeUuid = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "id-" + Math.random().toString(16).slice(2) + "-" + Date.now().toString(16);
};

function groupFocusAreas(areas = []) {
  const selfSet = new Set(["self", "marriage_self"]);
  const churchSet = new Set(["church"]);
  const self = [];
  const church = [];
  const others = [];
  areas.forEach((a) => {
    if (selfSet.has(a)) self.push(a);
    else if (churchSet.has(a)) church.push(a);
    else others.push(a);
  });
  return { self, others, church };
}

function applyChurchName(person, text) {
  if (!text) return text;
  const isChurch = (person.focusAreas || []).includes("church");
  if (!isChurch || !person.name) return text;
  return text.replace(/this church/gi, person.name);
}

const defaultPeople = [
  {
    id: safeUuid(),
    name: "Michael",
    relationship: "friend",
    focusAreas: ["individual"],
    scriptures: [
      { reference: "Psalm 3:3", text: "But You, O Lord, are a shield for me, my glory and the One who lifts up my head." },
      { reference: "Psalm 91:11", text: "For He shall give His angels charge over you, to keep you in all your ways." }
    ],
    declarations: [
      "I bless Michael to know the Lord as his shield and lifter of his head.",
      "I bless him with angelic protection and freedom in Christ."
    ],
    notes: [
      { date: new Date().toISOString(), text: "Prayed Psalm 91 over his travel and peace of mind." }
    ],
    lastPrayedAt: new Date().toISOString()
  },
  {
    id: safeUuid(),
    name: "Sarah",
    relationship: "family",
    focusAreas: ["family"],
    scriptures: [
      { reference: "Psalm 107:20", text: "He sent His word and healed them, and delivered them from their destructions." },
      { reference: "Philippians 4:7", text: "And the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus." }
    ],
    declarations: [
      "I bless Sarah with healing in every place of pain.",
      "I bless her with the peace of God guarding her heart and mind."
    ],
    notes: [],
    lastPrayedAt: undefined
  }
];

const themeFromPref = () => {
  const stored = localStorage.getItem(themeKey);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const App = () => {
  const initial = loadPeople();
  const [people, setPeople] = useState(() => initial);
  const [selectedId, setSelectedId] = useState(() => (initial[0]?.id ? initial[0].id : null));
  const [theme, setTheme] = useState(() => themeFromPref());
  const [editingId, setEditingId] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [mainTab, setMainTab] = useState("people"); // people | detail | prayer
  const categories = useMemo(() => {
    if (templates.length) {
      const unique = Array.from(new Set(templates.map((t) => t.category).filter(Boolean)));
      return unique.length ? unique : fallbackCategories;
    }
    return fallbackCategories;
  }, [templates]);

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem(themeKey, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(people));
  }, [people]);

  useEffect(() => {
    const url = new URL("./blessings.json", window.location.href);
    fetch(url)
      .then((res) => (res.ok ? res.json() : embeddedTemplates))
      .then((data) => {
        const parsed = Array.isArray(data)
          ? data
          : Array.isArray(data?.blessings)
            ? data.blessings
            : [];
        setTemplates(parsed.length ? parsed : embeddedTemplates);
      })
      .catch(() => {
        setTemplates(embeddedTemplates);
      });
  }, []);

  useEffect(() => {
    if (!templates.length) return;
    setPeople((prev) =>
      prev.map((p) => ({
        ...p,
        declarations: mergeTemplateDeclarations(p.focusAreas || [], p.declarations || [])
      }))
    );
  }, [templates]);

const mergeTemplateDeclarations = (focusList, existing = []) => {
  const allowed = Array.isArray(focusList) ? focusList : [];
  if (!allowed.length) return existing;
  const pool = templates
    .filter((t) => allowed.includes(t.category || ""))
    .map((t) => t.text);
  const unique = new Set(existing);
  pool.forEach((txt) => unique.add(txt));
  return Array.from(unique);
};

  const sorted = useMemo(() => sortPeople(people), [people]);
  const selected = people.find((p) => p.id === selectedId) || sorted[0];

  useEffect(() => {
    if (!selected && sorted.length) {
      setSelectedId(sorted[0].id);
    }
  }, [selected, sorted]);

  const handleAdd = (data) => {
    const decls = mergeTemplateDeclarations(data.focusAreas, []);
    const person = {
      id: safeUuid(),
      name: data.name.trim(),
      relationship: data.relationship.trim() || "",
      focusAreas: data.focusAreas.length ? data.focusAreas : categories.slice(0, 1),
      scriptures: [],
      declarations: decls,
      notes: [],
      lastPrayedAt: undefined
    };
    setPeople((prev) => [person, ...prev]);
    setSelectedId(person.id);
  };

  const handleUpdate = (id, updater) => {
    setPeople((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        const next = { ...p, ...updater };
        if (updater.focusAreas) {
          next.declarations = mergeTemplateDeclarations(updater.focusAreas, next.declarations || []);
        }
        return next;
      })
    );
  };

  const handleAddScripture = (id, scripture) => {
    handleUpdate(id, { scriptures: [...(getPerson(id)?.scriptures || []), scripture] });
  };

  const handleAddDeclaration = (id, declaration) => {
    handleUpdate(id, { declarations: [...(getPerson(id)?.declarations || []), declaration] });
  };

  const handleEditDeclaration = (id, index, text) => {
    const person = getPerson(id);
    if (!person) return;
    const next = [...person.declarations];
    next[index] = text;
    handleUpdate(id, { declarations: next });
  };

  const handleRemoveDeclaration = (id, index) => {
    const person = getPerson(id);
    if (!person) return;
    const next = [...person.declarations];
    next.splice(index, 1);
    handleUpdate(id, { declarations: next });
  };

  const handleUseTemplate = (personId, tmpl) => {
    if (!tmpl?.text) return;
    handleAddDeclaration(personId, tmpl.text);
  };

  const handleAddNote = (id, text) => {
    const now = new Date().toISOString();
    const person = getPerson(id);
    if (!person) return;
    handleUpdate(id, {
      notes: [{ date: now, text }, ...person.notes],
      lastPrayedAt: now
    });
  };

  const handleRemove = (id) => {
    const target = getPerson(id);
    if (!target) return;
    if (!window.confirm(`Remove ${target.name}? This cannot be undone.`)) return;
    setEditingId(null);
    setPeople((prev) => {
      const filtered = prev.filter((p) => p.id !== id);
      const nextSelected = sortPeople(filtered)[0]?.id || null;
      setSelectedId(nextSelected);
      return filtered;
    });
  };

  const handleMarkAllPrayed = () => {
    const now = new Date().toISOString();
    setPeople((prev) =>
      prev.map((p) => ({
        ...p,
        notes: [{ date: now, text: "Prayed in master prayer." }, ...(p.notes || [])],
        lastPrayedAt: now
      }))
    );
  };

  const getPerson = (id) => people.find((p) => p.id === id);

  return (
    React.createElement("div", { className: "app-shell" },
      React.createElement("div", { className: "topbar" },
        React.createElement("div", null,
          React.createElement("p", { className: "eyebrow" }, "Blessing Studio"),
          React.createElement("h1", null, "Pray and bless the people you love")
        ),
        React.createElement("div", { className: "card-header actions" },
          React.createElement("button", {
            className: "ghost",
            onClick: () => setTheme((t) => (t === "light" ? "dark" : "light"))
          }, theme === "light" ? "Switch to dark" : "Switch to light")
        )
      ),
      React.createElement("div", { className: "tabs main-tabs" },
        React.createElement("button", {
          className: `tab${mainTab === "people" ? " active" : ""}`,
          type: "button",
          onClick: () => setMainTab("people")
        }, "People"),
        React.createElement("button", {
          className: `tab${mainTab === "detail" ? " active" : ""}`,
          type: "button",
          onClick: () => setMainTab("detail")
        }, "Blessing card"),
        React.createElement("button", {
          className: `tab${mainTab === "prayer" ? " active" : ""}`,
          type: "button",
          onClick: () => setMainTab("prayer")
        }, "Master prayer")
      ),
      React.createElement("div", { className: "layout" },
        React.createElement("div", { className: `tab-panel${mainTab === "people" ? "" : " inactive"}` },
          React.createElement("div", { className: "card section list-card" },
            React.createElement(Form, {
              focusAreas: categories,
              onSubmit: handleAdd,
              title: "Add person",
              submitLabel: "Add"
            }),
            React.createElement(PeopleList, {
              people: sorted,
              selectedId,
              onSelect: setSelectedId,
              onEdit: (id) => {
                setSelectedId(id);
                setEditingId(id);
                setMainTab("detail");
              },
              onRemove: handleRemove
            })
          )
        ),
        React.createElement("div", { className: `tab-panel${mainTab === "detail" ? "" : " inactive"}` },
          React.createElement("div", { className: "card section detail-card" },
            selected
              ? React.createElement(BlessingDetail, {
                  person: selected,
                focusAreas: categories,
                editing: editingId === selected.id,
                onStartEdit: () => {
                  setEditingId(selected.id);
                  setMainTab("people");
                },
                onCloseEdit: () => setEditingId(null),
                onSaveEdit: (data) => {
                  handleUpdate(selected.id, data);
                  setEditingId(null);
                },
                onAddScripture: (scripture) => handleAddScripture(selected.id, scripture),
                onAddDeclaration: (text) => handleAddDeclaration(selected.id, text),
                onRemoveDeclaration: (idx) => handleRemoveDeclaration(selected.id, idx),
                onAddNote: (text) => handleAddNote(selected.id, text),
                onUseTemplate: (tmpl) => handleUseTemplate(selected.id, tmpl),
                onRemove: () => handleRemove(selected.id),
                templates
              })
            : React.createElement("p", { className: "muted" }, "Add your first person to begin.")
        )
      ),
      React.createElement("div", { className: `tab-panel${mainTab === "prayer" ? "" : " inactive"}` },
          React.createElement("div", { className: "card section detail-card" },
            React.createElement(MasterPrayer, { people: sorted, onEditDeclaration: handleEditDeclaration, onMarkAllPrayed: handleMarkAllPrayed })
          )
        )
      )
    )
  );
};

const PeopleList = ({ people, selectedId, onSelect, onEdit, onRemove }) => {
  return (
    React.createElement("div", { className: "list" },
      people.map((person) =>
        React.createElement("div", {
          key: person.id,
          className: `person-row${person.id === selectedId ? " selected" : ""}`,
          onClick: () => onSelect(person.id)
        },
        React.createElement("div", { className: "row-top" },
          React.createElement("div", null,
            React.createElement("strong", null, person.name),
            person.relationship
              ? React.createElement("span", { className: "muted" }, ` - ${person.relationship}`)
              : null
          ),
          React.createElement("div", { className: "pill" },
            React.createElement("span", null, person.lastPrayedAt ? "Last prayed" : "Not prayed yet"),
            React.createElement("strong", null, person.lastPrayedAt ? formatDate(person.lastPrayedAt) : "--")
          )
        ),
        React.createElement("div", { className: "tags" },
          person.focusAreas.length
            ? person.focusAreas.map((f) =>
                React.createElement("span", { key: f, className: "focus-tag" }, f))
            : React.createElement("span", { className: "muted" }, "No focus areas yet.")
        ),
          React.createElement("div", { className: "flex-between" },
          React.createElement("span", { className: "muted" }, `${person.notes.length} notes - ${person.scriptures.length} scriptures`),
          React.createElement("div", { className: "actions" },
            React.createElement("button", {
              className: "ghost small",
              onClick: (e) => {
                e.stopPropagation();
                onEdit(person.id);
                onSelect(person.id);
              }
            }, "Edit"),
            React.createElement("button", {
              className: "danger ghost small",
              onClick: (e) => {
                e.stopPropagation();
                onRemove(person.id);
              }
            }, "Remove")
          )
        )
      ))
    )
  );
};

const Form = ({ focusAreas, onSubmit, title, submitLabel, initial = { name: "", relationship: "", focusAreas: [] } }) => {
  const [name, setName] = useState(initial.name);
  const [relationship, setRelationship] = useState(initial.relationship || "");
  const [selectedFocus, setSelectedFocus] = useState(
    initial.focusAreas && initial.focusAreas.length
      ? initial.focusAreas
      : focusAreas.slice(0, 1)
  );

  const toggleFocus = (area) => {
    setSelectedFocus((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name, relationship, focusAreas: selectedFocus });
    setName("");
    setRelationship("");
    setSelectedFocus([]);
  };

  return (
    React.createElement("form", { className: "form", onSubmit: handleSubmit },
      React.createElement("div", { className: "form-row" },
        React.createElement("div", { className: "form-label" }, title),
        React.createElement("div", { className: "hint" }, "Name is required; other fields are optional.")
      ),
      React.createElement("div", { className: "form-row" },
        React.createElement("label", { className: "form-label" }, "Name"),
        React.createElement("input", {
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: "Name",
          required: true
        })
      ),
      React.createElement("div", { className: "form-row" },
        React.createElement("label", { className: "form-label" }, "Relationship"),
        React.createElement("input", {
          value: relationship,
          onChange: (e) => setRelationship(e.target.value),
          placeholder: "friend, family, coworker..."
        })
      ),
      React.createElement("div", { className: "form-row" },
        React.createElement("label", { className: "form-label" }, "Focus areas"),
        React.createElement(FocusSelector, {
          focusAreas,
          selectedFocus,
          onToggle: toggleFocus
        })
      ),
      React.createElement("button", { type: "submit", className: "primary" }, submitLabel)
    )
  );
};

const FocusSelector = ({ focusAreas, selectedFocus, onToggle }) => {
  const groups = groupFocusAreas(focusAreas);
  const tabs = [
    { key: "self", label: "Self", items: groups.self },
    { key: "others", label: "Others", items: groups.others },
    { key: "church", label: "Church", items: groups.church }
  ];
  const firstWithItems = tabs.find((t) => t.items.length)?.key || "self";
  const [tab, setTab] = useState(firstWithItems);

  return (
    React.createElement("div", { className: "focus-selector" },
      React.createElement("div", { className: "tabs" },
        tabs.map((t) =>
          React.createElement("button", {
            key: t.key,
            className: `tab${tab === t.key ? " active" : ""}${!t.items.length ? " muted" : ""}`,
            type: "button",
            onClick: () => setTab(t.key),
            disabled: !t.items.length
          }, t.label)
        )
      ),
      tabs.map((t) =>
        t.key === tab
          ? React.createElement("div", { key: t.key, className: "checkboxes" },
              t.items.length
                ? t.items.map((area) =>
                    React.createElement("label", { key: area, className: "checkbox" },
                      React.createElement("input", {
                        type: "checkbox",
                        checked: selectedFocus.includes(area),
                        onChange: () => onToggle(area)
                      }),
                      React.createElement("span", null, area.replace(/_/g, " "))
                    )
                  )
                : React.createElement("span", { className: "muted" }, "No options in this tab.")
            )
          : null
      )
    )
  );
};

const BlessingDetail = ({
  person,
  focusAreas,
  editing,
  onStartEdit,
  onCloseEdit,
  onSaveEdit,
  onAddScripture,
  onAddDeclaration,
  onRemoveDeclaration,
  onAddNote,
  onUseTemplate,
  onRemove,
  templates
}) => {
  const allowedCategories = person.focusAreas && person.focusAreas.length ? person.focusAreas : focusAreas;
  const [scripture, setScripture] = useState({ reference: "", text: "" });
  const [declaration, setDeclaration] = useState("");
  const [note, setNote] = useState("");
  const [prayMode, setPrayMode] = useState(false);

  useEffect(() => {
    setScripture({ reference: "", text: "" });
    setDeclaration("");
    setNote("");
    setPrayMode(false);
  }, [person.id, allowedCategories]);

  return (
    React.createElement("div", { className: "stack" },
      React.createElement("div", { className: "detail-header" },
        React.createElement("div", null,
          React.createElement("p", { className: "eyebrow" }, person.relationship || "Person"),
          React.createElement("h2", null, person.name),
          React.createElement("p", { className: "muted" }, "Today I bless " + person.name + " in Jesus' name."),
          React.createElement("div", { className: "tags" },
            person.focusAreas.length
              ? person.focusAreas.map((f) =>
                  React.createElement("span", { key: f, className: "focus-tag" }, f))
              : React.createElement("span", { className: "muted" }, "No focus areas yet.")
          )
        ),
        React.createElement("div", { className: "actions" },
          editing
            ? React.createElement(EditPerson, {
                person,
                focusAreas,
                onCancel: onCloseEdit,
                onSave: onSaveEdit
              })
            : React.createElement("button", { className: "ghost small", onClick: onStartEdit }, "Edit basics"),
          React.createElement("button", { className: "primary small", onClick: () => setPrayMode((p) => !p) },
            prayMode ? "Exit Pray Mode" : "Enter Pray Mode"),
          React.createElement("button", { className: "danger ghost small", onClick: onRemove }, "Remove")
        )
      ),
      prayMode
        ? React.createElement(PrayMode, { person })
        : React.createElement(React.Fragment, null,
            React.createElement("div", { className: "stack" },
              React.createElement("div", { className: "form-row" },
                React.createElement("div", { className: "form-label" }, "Scriptures"),
                React.createElement("div", { className: "hint" }, "Add a verse you want to pray.")
              ),
              React.createElement("div", { className: "input-row" },
                React.createElement("input", {
                  value: scripture.reference,
                  onChange: (e) => setScripture((s) => ({ ...s, reference: e.target.value })),
                  placeholder: "Reference (e.g., Psalm 23:6)"
                }),
                React.createElement("input", {
                  value: scripture.text,
                  onChange: (e) => setScripture((s) => ({ ...s, text: e.target.value })),
                  placeholder: "Verse text"
                }),
                React.createElement("button", {
                  className: "primary subtle",
                  type: "button",
                  onClick: () => {
                    if (!scripture.reference.trim() || !scripture.text.trim()) return;
                    onAddScripture(scripture);
                    setScripture({ reference: "", text: "" });
                  }
                }, "Add")
              ),
              React.createElement("div", { className: "scripture-list" },
                person.scriptures.length
                  ? person.scriptures.map((s, idx) =>
                      React.createElement("div", { key: idx, className: "scripture" },
                        React.createElement("strong", null, s.reference),
                        React.createElement("div", null, s.text)
                      ))
                  : React.createElement("p", { className: "muted" }, "No scriptures yet.")
              )
            ),
            React.createElement("div", { className: "divider" }),
            React.createElement("div", { className: "stack" },
              React.createElement("div", { className: "form-row" },
                React.createElement("div", { className: "form-label" }, "Blessing declarations"),
                React.createElement("div", { className: "hint" }, "Speak blessing statements rooted in those verses.")
              ),
              React.createElement("div", { className: "input-row" },
                React.createElement("input", {
                  value: declaration,
                  onChange: (e) => setDeclaration(e.target.value),
                  placeholder: "e.g., I bless Michael with freedom in Christ..."
                }),
                React.createElement("button", {
                  className: "primary subtle",
                  type: "button",
                  onClick: () => {
                    if (!declaration.trim()) return;
                    onAddDeclaration(declaration.trim());
                    setDeclaration("");
                  }
                }, "Add")
              ),
              React.createElement("div", { className: "declaration-list" },
                person.declarations.length
                  ? person.declarations.map((d, idx) =>
                      React.createElement("div", { key: idx, className: "declaration" },
                        React.createElement("div", { className: "flex-between" },
                          React.createElement("div", null, d),
                          React.createElement("button", {
                            className: "danger ghost small",
                            type: "button",
                            onClick: () => onRemoveDeclaration(idx)
                          }, "Remove")
                        )
                      ))
                  : React.createElement("p", { className: "muted" }, "No declarations yet.")
              )
            ),
            React.createElement("div", { className: "divider" }),
            React.createElement("div", null,
              React.createElement("details", { className: "collapsible" },
                React.createElement("summary", null, "Basic blessings (from blessings.json)"),
                React.createElement("div", { className: "hint", style: { marginBottom: "10px" } }, 'Tap "Use" to add the text as a declaration.'),
                React.createElement(BlessingTemplates, {
                  templates,
                  allowedCategories,
                  existingDeclarations: person.declarations || [],
                  onUse: (tmpl) => onUseTemplate(tmpl)
                })
              )
            ),
            React.createElement("div", { className: "divider" }),
            React.createElement("div", { className: "stack" },
              React.createElement("div", { className: "form-row" },
                React.createElement("div", { className: "form-label" }, "Prayer notes / journal"),
                React.createElement("div", { className: "hint" }, "Record what you prayed today.")
              ),
              React.createElement("textarea", {
                value: note,
                onChange: (e) => setNote(e.target.value),
                rows: 3,
                placeholder: "What are you blessing or praying today?"
              }),
              React.createElement("div", { className: "actions" },
                React.createElement("button", {
                  className: "primary small",
                  type: "button",
                  onClick: () => {
                    if (!note.trim()) return;
                    onAddNote(note.trim());
                    setNote("");
                  }
                }, "Save note & mark prayed")
              ),
              React.createElement("div", { className: "note-list" },
                person.notes.length
                  ? person.notes.map((n, idx) =>
                      React.createElement("div", { key: idx, className: "note" },
                        React.createElement("div", { className: "note-date" }, formatDateTime(n.date)),
                        React.createElement("div", null, n.text)
                      ))
                  : React.createElement("p", { className: "muted" }, "No notes yet.")
              )
            ),
            React.createElement("div", { className: "divider" }),
            React.createElement("div", { className: "stack" },
              React.createElement("div", { className: "form-row" },
                React.createElement("div", { className: "form-label" }, "Prayer calendar"),
                React.createElement("div", { className: "hint" }, "Every date you prayed for this person.")
              ),
              React.createElement(PrayerCalendar, { notes: person.notes })
            )
          )
    )
  );
};

const EditPerson = ({ person, focusAreas, onCancel, onSave, showFocusAreas = true }) => {
  const groups = groupFocusAreas(focusAreas);
  const [name, setName] = useState(person.name);
  const [relationship, setRelationship] = useState(person.relationship || "");
  const [selectedFocus, setSelectedFocus] = useState(person.focusAreas || []);

  useEffect(() => {
    setName(person.name);
    setRelationship(person.relationship || "");
    setSelectedFocus(person.focusAreas || []);
  }, [person]);

  const toggleFocus = (area) => {
    setSelectedFocus((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  return (
    React.createElement("div", { className: "form" },
      React.createElement("div", { className: "input-row" },
        React.createElement("input", {
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: "Name",
          required: true
        }),
        React.createElement("input", {
          value: relationship,
          onChange: (e) => setRelationship(e.target.value),
          placeholder: "Relationship"
        })
      ),
      showFocusAreas
        ? React.createElement(FocusSelector, {
            focusAreas,
            selectedFocus,
            onToggle: toggleFocus
          })
        : null,
      React.createElement("div", { className: "actions" },
        React.createElement("button", {
          className: "ghost small",
          type: "button",
          onClick: onCancel
        }, "Cancel"),
        React.createElement("button", {
          className: "primary small",
          type: "button",
          onClick: () => {
            if (!name.trim()) return;
            onSave({ name: name.trim(), relationship, focusAreas: selectedFocus });
          }
        }, "Save")
      )
    )
  );
};

const PrayMode = ({ person }) => {
  return (
    React.createElement("div", { className: "pray-mode" },
      React.createElement("div", { className: "pray-line" }, `Father, I thank You for ${person.name}.`),
      person.scriptures.map((s, idx) =>
        React.createElement("div", { key: idx, className: "pray-line" },
          `${s.reference} - ${s.text}`
        )
      ),
      person.declarations.map((d, idx) =>
        React.createElement("div", { key: idx, className: "pray-line" }, d)
      ),
      person.focusAreas.length
        ? React.createElement("div", { className: "muted" }, `Focus: ${person.focusAreas.join(", ")}`)
        : null
    )
  );
};

const MasterPrayer = ({ people, onEditDeclaration, onMarkAllPrayed }) => {
  const [editMode, setEditMode] = useState(false);
  if (!people.length) {
    return React.createElement("p", { className: "muted" }, "Add people to build a master prayer.");
  }

  return (
    React.createElement("div", { className: "pray-mode" },
      React.createElement("div", { className: "master-header" },
        React.createElement("div", null,
          React.createElement("div", { className: "pray-line" }, "Father, I lift every person on my list to You."),
          React.createElement("div", { className: "muted" }, editMode ? "Editing declarations" : "Readable view")
        ),
        React.createElement("button", {
          className: editMode ? "ghost small" : "primary small",
          type: "button",
          onClick: () => setEditMode((m) => !m)
        }, editMode ? "Done editing" : "Edit all")
      ),
      people.map((p) =>
        React.createElement("div", { key: p.id, className: "template" },
          React.createElement("div", { className: "flex-between" },
            React.createElement("strong", null, p.name),
            p.focusAreas?.length
              ? React.createElement("div", { className: "tags" },
                  p.focusAreas.map((f) => React.createElement("span", { key: f, className: "focus-tag" }, f)))
              : React.createElement("span", { className: "muted" }, "No focus")
          ),
          React.createElement(MasterPrayerList, { person: p, editMode, onEditDeclaration })
        )
      )
      ,
      React.createElement("div", { className: "master-footer" },
        React.createElement("button", {
          className: "primary small",
          type: "button",
          onClick: () => onMarkAllPrayed && onMarkAllPrayed()
        }, "Mark all prayed")
      )
    )
  );
};

const MasterPrayerList = ({ person, editMode, onEditDeclaration }) => {
  const [drafts, setDrafts] = useState({});
  const [editingKey, setEditingKey] = useState(null);
  const declarations = person.declarations || [];
  const isSelf = (person.focusAreas || []).some((f) => f === "self" || f === "marriage_self" || f === "church");

  const updateDraft = (key, value) => {
    setDrafts((prev) => ({ ...prev, [key]: value }));
  };

  return React.createElement("div", { className: "stack" },
    declarations.length
      ? declarations.map((d, idx) => {
          const key = `${person.id}-${idx}`;
          const baseValue = drafts[key] !== undefined ? drafts[key] : d;
          const displayValue = applyChurchName(person, baseValue);
          const value = baseValue;
          const isEditing = editingKey === key;
          return React.createElement("div", { key: key, className: "declaration editable" },
            editMode
              ? (
                isEditing
                  ? React.createElement(React.Fragment, null,
                      React.createElement("textarea", {
                        value: value,
                        rows: 2,
                        onChange: (e) => updateDraft(key, e.target.value),
                        className: "declaration-input"
                      }),
                      React.createElement("div", { className: "actions" },
                        React.createElement("button", {
                          className: "ghost small",
                          type: "button",
                          onClick: () => setEditingKey(null)
                        }, "Cancel"),
                        React.createElement("button", {
                          className: "primary small",
                          type: "button",
                          onClick: () => {
                            if (!value.trim()) return;
                            onEditDeclaration(person.id, idx, applyChurchName(person, value.trim()));
                            setEditingKey(null);
                          }
                        }, "Save")
                      )
                    )
                  : React.createElement("div", { className: "flex-between" },
                      React.createElement("div", null, value),
                      React.createElement("button", {
                        className: "ghost small",
                        type: "button",
                        onClick: () => {
                          setEditingKey(key);
                          updateDraft(key, value);
                        }
                      }, "Edit")
                    )
              )
              : React.createElement("div", { className: "pray-line" }, isSelf ? displayValue : person.name + ": " + displayValue)
          );
        })
      : React.createElement("p", { className: "muted" }, "No declarations yet.")
  );
};

const PrayerCalendar = ({ notes = [] }) => {
  const uniqueDates = Array.from(
    new Set(
      (notes || [])
        .map((n) => {
          const d = new Date(n.date);
          return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
        })
        .filter(Boolean)
    )
  ).sort((a, b) => (a > b ? -1 : 1));

  if (!uniqueDates.length) {
    return React.createElement("p", { className: "muted" }, "No prayer dates yet.");
  }

  return React.createElement("div", { className: "calendar" },
    uniqueDates.map((d) =>
      React.createElement("div", { key: d, className: "calendar-date" }, formatDate(d))
    )
  );
};

const BlessingTemplates = ({ templates, allowedCategories, onUse, existingDeclarations = [] }) => {
  if (!templates || !templates.length) {
    return React.createElement("p", { className: "muted" }, "No templates loaded yet.");
  }

  const scoped = templates.filter((t) =>
    allowedCategories.includes(t.category || "uncategorized")
  );

  if (!scoped.length) {
    return React.createElement("p", { className: "muted" }, "No templates for these focus areas.");
  }

  const declaredSet = new Set(existingDeclarations);
  const available = scoped.filter((t) => !declaredSet.has(t.text));

  if (!available.length) {
    return React.createElement("p", { className: "muted" }, "All blessings for these focus areas are already in declarations.");
  }

  return (
    React.createElement("div", { className: "template-list" },
      available.map((t) =>
        React.createElement("div", { key: t.id || t.title, className: "template" },
          React.createElement("div", { className: "flex-between" },
            React.createElement("div", null,
              React.createElement("strong", null, t.title),
              t.category ? React.createElement("span", { className: "focus-tag" }, t.category) : null
            ),
            React.createElement("button", { className: "primary small", type: "button", onClick: () => onUse(t) }, "Use")
          ),
          t.description ? React.createElement("div", { className: "muted" }, t.description) : null,
          React.createElement("div", { className: "template-text" }, t.text)
        )
      )
    )
  );
};

function loadPeople() {
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.warn("Could not load saved people", e);
  }
  return defaultPeople;
}

function sortPeople(people) {
  return [...people].sort((a, b) => {
    const aDate = a.lastPrayedAt ? new Date(a.lastPrayedAt).getTime() : 0;
    const bDate = b.lastPrayedAt ? new Date(b.lastPrayedAt).getTime() : 0;
    if (aDate === bDate) {
      return a.name.localeCompare(b.name);
    }
    return aDate - bDate;
  });
}

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "--";
  return d.toLocaleDateString();
}

function formatDateTime(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "--";
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
}

const root = createRoot(document.getElementById("root"));
root.render(React.createElement(App));
