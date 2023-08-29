
import { useState } from "react";

const Section = ({ title, description , isVisible, setIsVisible }) => {
  
  return (
    <div className="border-4 border-purple-600 m-2 p-2">
      <h1 className="font-bold text-orange-600 text-2xl">{title}</h1>
      {isVisible ? (
        <button className="w-auto h-auto my-3 p-2 px-7 bg-red-500 text-white rounded-lg" onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button className="w-auto h-auto my-3 p-2 px-7 bg-violet-500 text-white rounded-lg" onClick={() => setIsVisible(true)}>Show</button>
      )}

      {isVisible && <h2>{description}</h2>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about")
  return (
    <div>
      <Section
        title="About Instamart"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        isVisible={visibleSection==="about"}
        setIsVisible={()=>setVisibleSection()}
      />
      <Section
        title="Careers Instamart"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        isVisible={visibleSection==="career"}
        setIsVisible={()=>setVisibleSection("about")}
      />
    </div>
  );
};

export default Instamart;
